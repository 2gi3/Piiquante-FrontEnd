import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  render,
  waitFor,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { wait } from '@testing-library/user-event/dist/utils'
import { MemoryRouter } from 'react-router-dom'
import SaucePage from './SaucePage'

const server = setupServer(
  // Specify the url that we want to "intercept"
  rest.get(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/*',
    (req, res, ctx) => {
      // Here we can pass the mocked data into what is returned in json
      return res(
        ctx.json({
          _id: '62b1d0e2153b0f0ac5a856e2',
          userId: '6287b3bc7463870c5f1eb0f0',
          name: 'TEST SAUCE',
          manufacturer: "Sainsbury's",
          description:
            'This is a flavorful North African condiment that will add depth, complexity and smoky heat to tagines, meats, stews, and roasted vegetable dishes.',
          mainPepper: 'Dried chilli peppers ',
          imageUrl:
            'https://res.cloudinary.com/gippolito/image/upload/v1656275976/qrj4vr3mwafiqvx6scmp.webp',
          heat: 5,
          likes: 1,
          dislikes: 0,
          userLiked: ['62f5cc8c6bffad7e9ed14144'],
          userDisliked: [],
          createdAt: '2022-06-21T14:08:34.412Z',
          updatedAt: '2023-01-01T10:11:31.334Z',
          __v: 41,
        })
      )
    }
  ),
  rest.delete(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/:id',
    (req, res, ctx) => {
      return res(ctx.delay(200), ctx.json({ message: 'Deleted!' }))
    }
  ),
  rest.post(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/:id/like',
    (req, res, ctx) => {
      return res(
        ctx.delay(200),
        ctx.json({
          message: 'Sauce Like Updated!',
          // sauce: { userLiked: ['user1', 'user2'] },
        })
      )
    }
  ),
  rest.post(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/:id/dislike',
    (req, res, ctx) => {
      return res(
        ctx.json({
          data: {
            message: 'Sauce Like Updated!',
            // sauce: { userLiked: ['user1', 'user2'] },
          },
        })
      )
    }
  )
)

// Activate the API mock before the tests from server
beforeAll(() => server.listen())
// Reset anything we might have added in terms of duration for our tests before each test
afterEach(() => server.resetHandlers())
// Close the API mock once tests are over
afterAll(() => server.close())
// Clear sessionStorage after each test
afterEach(() => {
  window.sessionStorage.clear()
})

const consoleSpy = jest.spyOn(console, 'log')
test('Should render without crash', async () => {
  const res = await fetch(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/62b0af8e40eb3624c884d3c6'
  )
  const data = await res.json()
  window.sessionStorage.setItem('userId', '6287b3bc7463870c5f1eb0f0')
  window.sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIs')

  const { getByText, getByRole, getByTestId, queryByText } = render(
    <MemoryRouter>
      <SaucePage />
    </MemoryRouter>
  )

  await waitForElementToBeRemoved(() => getByTestId('pageLoader'))
  await waitFor(() => {
    expect(getByText(/TEST SAUCE/i)).toBeTruthy()
    expect(getByRole('link', { name: 'Back to homepage' })).toBeTruthy()
  })

  fireEvent.click(getByTestId('likeButton'))
  await waitFor(() =>
    expect(consoleSpy).toHaveBeenCalledWith('Sauce Like Updated!')
  )

  fireEvent.click(getByText(/delete/i))
  await waitFor(() =>
    // expect(getByText(/Do you want to delete this sauce\?/i)).toBeInTheDocument()
    expect(getByRole('button', { name: 'No' })).toBeInTheDocument()
  )

  fireEvent.click(getByRole('button', { name: 'No' }))
  await waitFor(() =>
    expect(queryByText(/Do you want to delete this sauce\?/i)).toBeNull()
  )

  fireEvent.click(getByText(/delete/i))
  await waitFor(() =>
    expect(getByText(/Do you want to delete this sauce\?/i)).toBeInTheDocument()
  )

  fireEvent.click(getByText(/yes/i))
  // await waitForElementToBeRemoved(() => getByTestId('confirmationLoader'))
  await waitFor(() => {
    expect(getByTestId('confirmationLoader')).toBeInTheDocument()
  })
  await waitFor(() => expect(consoleSpy).toHaveBeenCalledWith('Deleted!'))
})

it('Modify and Delete buttons should not appear if the uses is not the sauce creator', async () => {
  const res = await fetch(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/62b0af8e40eb3624c884d3c6'
  )
  const data = await res.json()
  const { queryByText, getByTestId } = render(
    <MemoryRouter>
      <SaucePage />
    </MemoryRouter>
  )

  await waitForElementToBeRemoved(() => getByTestId('pageLoader'))
  expect(queryByText('DELETE')).toBeNull()
  expect(queryByText('MODIFY')).toBeNull()

  fireEvent.click(getByTestId('dislikeButton'))
  await waitFor(() =>
    expect(consoleSpy).toHaveBeenCalledWith(
      'please log in to use the like buttons'
    )
  )
})

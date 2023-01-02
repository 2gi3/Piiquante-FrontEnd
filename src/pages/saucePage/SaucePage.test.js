import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  render,
  waitFor,
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
      return res(ctx.json({ message: 'Deleted!' }))
    }
  ),
  rest.patch(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/:id/like',
    (req, res, ctx) => {
      return res(
        ctx.json({
          message: 'Sauce Like Updated!',
          sauce: { userLiked: ['user1', 'user2'] },
        })
      )
    }
  ),
  rest.patch(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/:id/dislike',
    (req, res, ctx) => {
      return res(
        ctx.json({
          message: 'Sauce Like Updated!',
          sauce: { userDisliked: ['user1', 'user2'] },
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

test('Should render without crash', async () => {
  const res = await fetch(
    'https://secure-harbor-62492.herokuapp.com/api/sauces/62b0af8e40eb3624c884d3c6'
  )
  const data = await res.json()

  render(
    <MemoryRouter>
      <SaucePage />
    </MemoryRouter>
  )
  // expect(screen.getByTestId('loader')).toBeTruthy()
  // await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  await waitFor(() => {
    expect(screen.getByText(/TEST SAUCE/i)).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Back to homepage' })).toBeTruthy()
  })
})

// test('Allows user to like, dislike and delete sauce', async () => {
//   const { getByText } = render(<SaucePage />)

//   // await waitFor(() => expect(getByText('sample sauce')).toBeInTheDocument())

//   fireEvent.click(getByText(/like/i))
//   await waitFor(() =>
//     expect(getByText('Successfully liked sauce')).toBeInTheDocument()
//   )

//   fireEvent.click(getByText(/dislike/i))
//   await waitFor(() =>
//     expect(getByText('Successfully disliked sauce')).toBeInTheDocument()
//   )

//   fireEvent.click(getByText(/delete/i))
//   await waitFor(() =>
//     expect(getByText('Delete successful')).toBeInTheDocument()
//   )
// })

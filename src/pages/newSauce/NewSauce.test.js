import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  render,
  waitFor,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NewSauce from './NewSauce'

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
    },
    rest.put(
      'https://secure-harbor-62492.herokuapp.com/api/sauces/:id',
      (req, res, ctx) => {
        return res(
          ctx.json({
            message: 'Sauce Updated!',
          })
        )
      }
    )
  )
)

// Activate the API mock before the tests from server
beforeAll(() => server.listen())
// Reset anything we might have added in terms of duration for our tests before each test
afterEach(() => server.resetHandlers())
// Close the API mock once tests are over
afterAll(() => server.close())
// Clear sessionStorage after each test
// afterEach(() => {
//   window.sessionStorage.clear()
// })
const consoleSpy = jest.spyOn(console, 'log')

describe('Test the NewSauce page as accessed through the modify-sauce route', () => {
  window.sessionStorage.setItem('token', 'test-token')
  window.sessionStorage.setItem('userId', '6287b3bc7463870c5f1eb0f0')

  it('Should render the page and display fetched data without crushing', async () => {
    const res = await fetch(
      'https://secure-harbor-62492.herokuapp.com/api/sauces/62b1d0e2153b0f0ac5a856e2'
    )
    //   const data = await res.json()
    const { getByText, getByLabelText, getByRole, getByTestId, queryByText } =
      render(
        <MemoryRouter
          initialEntries={[
            '/saucepage/62b1d0e2153b0f0ac5a856e2/updatesauce/62b1d0e2153b0f0ac5a856e2',
          ]}
        >
          <NewSauce />
        </MemoryRouter>
      )
    // Wait for the get request and the form to be prefilled with the current data
    await waitFor(() => {
      expect(getByText(/Update sauce/i)).toBeTruthy()
      expect(getByLabelText(/Sauce name/i)).toBeInTheDocument()
      expect(
        getByText(/This is a flavorful North African condiment/i)
      ).toBeTruthy()
    })

    // Fill out the form
    // fireEvent.change(getByLabelText(/Name/i), {
    //   target: { value: 'Updated Sauce' },
    // })
    // fireEvent.change(getByLabelText(/Manufacturer/i), {
    //   target: { value: 'Updated Manufacturer' },
    // })
    // fireEvent.change(getByLabelText(/Description/i), {
    //   target: { value: 'Updated Description' },
    // })
    // fireEvent.change(getByLabelText(/Main ingredient/i), {
    //   target: { value: 'Updated Pepper' },
    // })
    // fireEvent.input(getByTestId('heat-range'), {
    //   target: { value: '7' },
    // })

    // // Submit the form
    // fireEvent.click(getByText('Update sauce'))

    // // Wait for the PUT request to complete and the page to redirect
    // await waitFor(() => {
    //   expect(consoleSpy).toHaveBeenCalledWith('Sauce Updated!')
    // })
  })
})

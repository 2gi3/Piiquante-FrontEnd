import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  render,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
// import { ThemeProvider } from '../../context'
import { wait } from '@testing-library/user-event/dist/utils'
import Homepage from './Homepage'
import { MemoryRouter } from 'react-router-dom'

const server = setupServer(
  // Specify the url that we want to "intercept"
  rest.get(
    'https://secure-harbor-62492.herokuapp.com/api/sauces',
    (req, res, ctx) => {
      // Here we can pass the mocked data into what is returned in json
      return res(
        ctx.json([
          {
            _id: '62b0af8e40eb3624c884d3c6',
            userId: '6287b3bc7463870c5f1eb0f0',
            name: 'First Test Sauce',
            manufacturer: "Sainsbury's",
            description:
              'A sticky, sweet and tangy blend of chilli and garlic.',
            mainPepper: 'Red chillies ',
            imageUrl:
              'https://res.cloudinary.com/gippolito/image/upload/v1656275757/m13zqiceol5y7p5pb3up.webp',
            heat: 4,
            likes: 1,
            dislikes: 0,
            userLiked: ['6287b3bc7463870c5f1eb0f0'],
            userDisliked: [],
            createdAt: '2022-06-20T17:34:06.277Z',
            updatedAt: '2022-12-30T10:00:16.451Z',
            __v: 25,
          },
          {
            _id: '62b7e9c441fa2e2f426a6a04',
            userId: '6287b3bc7463870c5f1eb0f0',
            name: 'Green curry paste',
            manufacturer: 'COOP',
            description:
              'A combination of fresh Thai flavours of kaffir lime leaves, Thai basil, coriander and spicy green chillies',
            mainPepper: 'Green chillies',
            imageUrl:
              'https://res.cloudinary.com/gippolito/image/upload/v1656281277/h4xgvcdgaoulqm99vw7j.webp',
            heat: 4,
            likes: 3,
            dislikes: 0,
            userLiked: ['635156bf34cb3a1c07db151c'],
            userDisliked: [],
            createdAt: '2022-06-26T05:08:20.180Z',
            updatedAt: '2022-10-21T07:28:35.559Z',
            __v: 81,
          },
          {
            _id: '62b8da2c2cc45f38bb2ec7d3',
            userId: '6287b3bc7463870c5f1eb0f0',
            name: 'Regret',
            manufacturer: 'Justchillies.co.uk',
            description:
              'A BLEND OF GARLIC, HERBS, TOMATOES, LIME AND SEARING HEAT COURTESY OF 12 MILLION SCOVILLE UNIT OLEORESIN. ABSOLUTELY NOT FOR THE FAINT OF HEART.',
            mainPepper: 'Oleoresin Capsicum',
            imageUrl:
              'https://res.cloudinary.com/gippolito/image/upload/v1656281644/j4twa6lqaivbmu1wvenb.webp',
            heat: 10,
            likes: 2,
            dislikes: 2,
            userLiked: ['62f5cc8c6bffad7e9ed14144'],
            userDisliked: ['635156bf34cb3a1c07db151c'],
            createdAt: '2022-06-26T22:14:04.778Z',
            updatedAt: '2022-11-06T16:17:48.322Z',
            __v: 30,
          },
        ])
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
    'https://secure-harbor-62492.herokuapp.com/api/sauces'
  )
  const data = await res.json()
  //   console.log(data)
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  )
  //   expect(screen.getByTestId('loader')).toBeTruthy()
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  await waitFor(() => {
    expect(screen.getByText(/First Test Sauce/i)).toBeTruthy()
    // expect(screen.getByText(/Ervin/i)).toBeTruthy()
  })
})

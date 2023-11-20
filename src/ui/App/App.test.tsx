import React from 'react'
import 'react-native'
import { act, fireEvent, render } from '@testing-library/react-native'
import { App } from '.'
import { setupStore } from '../../state'

jest.useFakeTimers()

describe('App', () => {
  describe('search', () => {
    describe('on success', () => {
      beforeEach(() => {
        fetchMock
          .mockResponseOnce(() =>
            delay(300).then(() =>
              JSON.stringify({
                id: '123',
                name: 'Some Name',
              }),
            ),
          )
          .mockResponseOnce(() =>
            delay(300).then(() =>
              JSON.stringify({
                sprites: { front_default: 'https://www.example.com' },
              }),
            ),
          )
      })

      it('should load Pokemon', async () => {
        const store = setupStore({
          search: { query: '', history: [], isHistoryEnabled: false },
          pokemon: { type: 'default' },
        })
        const rendered = render(
          <App
            store={store}
            searchQueryInputTestID="search-query-input"
            searchButtonTestID="search-button"
            searchHistoryButtonTestID="search-history-button"
          />,
        )

        expect(rendered.toJSON()).toMatchSnapshot('default')

        const searchQueryInputView = await rendered.findByTestId(
          'search-query-input',
        )
        const searchButtonView = await rendered.findByTestId('search-button')

        fireEvent(searchQueryInputView, 'changeText', 'Some query')
        fireEvent(searchButtonView, 'press')

        await advanceTimeBy(200)

        expect(rendered.toJSON()).toMatchSnapshot('loading')

        await advanceTimeBy(200)

        expect(rendered.toJSON()).toMatchSnapshot('success')

        const searchHistoryButton = await rendered.findByTestId(
          'search-history-button',
        )

        fireEvent(searchHistoryButton, 'press')

        expect(rendered.toJSON()).toMatchSnapshot('history')
      })
    })

    describe('on error', () => {
      beforeEach(() => {
        fetchMock.mockReject(() =>
          delay(300).then(() => {
            throw new Error('Some error')
          }),
        )
      })

      it('should show an error', async () => {
        const store = setupStore({
          search: { query: '', history: [], isHistoryEnabled: false },
          pokemon: { type: 'default' },
        })
        const rendered = render(
          <App
            store={store}
            searchQueryInputTestID="search-query-input"
            searchButtonTestID="search-button"
            searchHistoryButtonTestID="search-history-button"
          />,
        )

        expect(rendered.toJSON()).toMatchSnapshot('default')

        const searchQueryInputView = await rendered.findByTestId(
          'search-query-input',
        )
        const searchButtonView = await rendered.findByTestId('search-button')

        fireEvent(searchQueryInputView, 'changeText', 'Some query')
        fireEvent(searchButtonView, 'press')

        await advanceTimeBy(200)

        expect(rendered.toJSON()).toMatchSnapshot('loading')

        await advanceTimeBy(200)

        expect(rendered.toJSON()).toMatchSnapshot('error')

        const searchHistoryButton = await rendered.findByTestId(
          'search-history-button',
        )

        fireEvent(searchHistoryButton, 'press')

        expect(rendered.toJSON()).toMatchSnapshot('history')
      })
    })
  })
})

afterEach(() => fetchMock.resetMocks())

const delay: (duration: number) => Promise<void> = duration =>
  new Promise(resolve => setTimeout(resolve, duration))

const advanceTimeBy: (duration: number) => Promise<void> = duration =>
  act(async () => {
    jest.advanceTimersByTime(duration)
  })

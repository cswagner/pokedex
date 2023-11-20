import React from 'react'
import 'react-native'
import { act, fireEvent, render } from '@testing-library/react-native'
import { App } from '.'
import { setupStore } from '../../state'

jest.useFakeTimers()

describe('App', () => {
  describe('search', () => {
    describe('on success', () => {
      const response = {
        id: '123',
        name: 'Some Name',
      }

      beforeEach(() => {
        fetchMock.mockResponse(() =>
          delay(300).then(() => JSON.stringify(response)),
        )
      })

      it('should load Pokemon', async () => {
        const store = setupStore({
          search: { query: '' },
          pokemon: { type: 'default' },
        })
        const rendered = render(
          <App
            store={store}
            searchQueryInputTestID="search-query-input"
            searchButtonTestID="search-button"
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
          search: { query: '' },
          pokemon: { type: 'default' },
        })
        const rendered = render(
          <App
            store={store}
            searchQueryInputTestID="search-query-input"
            searchButtonTestID="search-button"
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
      })
    })
  })
})

const delay: (duration: number) => Promise<void> = duration =>
  new Promise(resolve => setTimeout(resolve, duration))

const advanceTimeBy: (duration: number) => Promise<void> = duration =>
  act(async () => {
    jest.advanceTimersByTime(duration)
  })

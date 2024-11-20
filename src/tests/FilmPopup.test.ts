import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FilmPopup from '@/components/FilmPopup.vue'
import PopupDialog from '@/components/PopupDialog.vue'
import InfoCard from '@/components/InfoCard.vue'
import type { Film } from '@/types/common'

// Mock dependencies
vi.mock('@/components/PopupDialog.vue', () => ({
  default: {
    template: `<div><button @click="$emit('close')">Close</button><slot></slot></div>`,
    props: ['isVisible'],
  },
}))
vi.mock('@/components/InfoCard.vue', () => ({
  default: {
    template: '<div><slot></slot></div>',
    props: ['title', 'icon', 'items'],
  },
}))

describe('FilmPopup.vue', () => {
  const filmMock = {
    title: 'A New Hope',
    img: '/images/a_new_hope.jpg',
    release_date: '1977-05-25',
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    episode_id: 4,
    opening_crawl: 'It is a period of civil war...',
    planetsData: [{ name: 'Tatooine', img: '/images/tatooine.jpg' }],
    charactersData: [{ name: 'Luke Skywalker', img: '/images/luke.jpg' }],
    speciesData: [{ name: 'Human', img: '/images/human.jpg' }],
  } as Film

  it('renders film details correctly', () => {
    const wrapper = mount(FilmPopup, {
      props: {
        isVisible: true,
        film: filmMock,
      },
    })

    // Check if title is rendered
    expect(wrapper.text()).toContain(filmMock.title)

    // Check if release date is rendered
    expect(wrapper.text()).toContain(filmMock.release_date)

    // Check if director is rendered
    expect(wrapper.text()).toContain(filmMock.director)

    // Check if producer is rendered
    expect(wrapper.text()).toContain(filmMock.producer)

    // Check if episode ID is rendered
    expect(wrapper.text()).toContain(filmMock.episode_id.toString())

    // Check if opening crawl is rendered
    expect(wrapper.text()).toContain(filmMock.opening_crawl)
  })

  it('renders InfoCard components with correct props', () => {
    const wrapper = mount(FilmPopup, {
      props: {
        isVisible: true,
        film: filmMock,
      },
    })

    const infoCards = wrapper.findAllComponents(InfoCard)
    expect(infoCards).toHaveLength(3)

    // Check if props are passed correctly to InfoCard
    expect(infoCards[0].props('title')).toBe('Planets')
    expect(infoCards[0].props('items')).toEqual(filmMock.planetsData)

    expect(infoCards[1].props('title')).toBe('Characters')
    expect(infoCards[1].props('items')).toEqual(filmMock.charactersData)

    expect(infoCards[2].props('title')).toBe('Species')
    expect(infoCards[2].props('items')).toEqual(filmMock.speciesData)
  })

  it('reacts to the isVisible prop', async () => {
    const wrapper = mount(FilmPopup, {
      props: {
        isVisible: false,
        film: filmMock,
      },
    })

    // Popup should not be visible initially
    expect(wrapper.findComponent(PopupDialog).props('isVisible')).toBe(false)

    // Update the prop
    await wrapper.setProps({ isVisible: true })

    // Popup should now be visible
    expect(wrapper.findComponent(PopupDialog).props('isVisible')).toBe(true)
  })

  it('emits "close" event when popup is closed', async () => {
    const wrapper = mount(FilmPopup, {
      props: {
        isVisible: true,
        film: filmMock,
      },
    })

    // Simulate the close event by clicking the mocked close button
    await wrapper.find('button').trigger('click')

    // Check if the "isVisible" is changed to false after the close event
    expect(wrapper.findComponent(PopupDialog).props('isVisible')).toBe(false)
  })
})

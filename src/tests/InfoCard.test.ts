import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoCard from '@/components/InfoCard.vue'

// Mock the YukiSvg component since it's a child component
vi.mock('@/components/YukiSvg.vue', () => ({
  default: {
    template: '<svg></svg>',
  },
}))

describe('InfoCard.vue', () => {
  it('renders the default title when no title prop is passed', () => {
    const wrapper = mount(InfoCard)
    expect(wrapper.text()).toContain('Default Title')
  })

  it('renders the passed title correctly', () => {
    const wrapper = mount(InfoCard, {
      props: { title: 'Custom Title' },
    })
    expect(wrapper.text()).toContain('Custom Title')
  })

  it('renders the passed icon correctly', () => {
    const wrapper = mount(InfoCard, {
      props: { icon: '🌟' },
    })
    // Ensure the icon is passed correctly
    expect(wrapper.html()).toContain('🌟')
  })

  it('renders the items correctly', () => {
    const items = [
      { name: 'Luke Skywalker', img: 'https://example.com/luke.jpg' },
      { name: 'Leia Organa', img: 'https://example.com/leia.jpg' },
    ]
    const wrapper = mount(InfoCard, {
      props: { items },
    })

    // Check if the items are rendered
    items.forEach((item) => {
      expect(wrapper.html()).toContain(item.name)
      expect(wrapper.html()).toContain(item.img)
    })
  })

  it('renders the slot content correctly', () => {
    const wrapper = mount(InfoCard, {
      slots: {
        default: '<div class="custom-slot">Custom Slot Content</div>',
      },
    })

    // Check if the slot content is rendered
    expect(wrapper.html()).toContain('Custom Slot Content')
  })

  it('applies the correct classes to the icon and title', () => {
    const wrapper = mount(InfoCard, {
      props: { title: 'Test Title', icon: 'star' },
    })

    // Check if the icon and title have the expected classes
    expect(wrapper.find('h2').classes()).toContain('text-white')
    expect(wrapper.find('h2').classes()).toContain('font-semibold')
    expect(wrapper.find('.w-6').classes()).toContain('fill-black')
  })
})

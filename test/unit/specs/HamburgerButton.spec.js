import { mount } from 'vue-test-utils'
import HamburgerButton from '@/components/HamburgerButton'

const createComponent = propsData => mount(HamburgerButton, { propsData })

describe('HamburgerButton.vue', () => {
  let wrapper

  it('has the expected html structure', () => {
    wrapper = createComponent({ active: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('requires the active prop', () => {
    // TODO actually test that a warning happened?
    wrapper = createComponent()
    const active = wrapper.vm.$options.props.active
    expect(active.required).toBeTruthy()
    expect(active.type).toBe(Boolean)
  })

  it('applies the barStyle prop to the bars', () => {
    wrapper = createComponent({ active: false, barStyle: { backgroundColor: 'red' } })
    let bars = wrapper.findAll('.bar')
    let i = bars.length
    while (i--) {
      expect(bars.at(i).attributes().style).toContain('red')
    }
  })

  it('triggers an update:active event when the button is clicked', () => {
    wrapper = createComponent({ active: false })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted()['update:active']).toBeTruthy()
    expect(wrapper.emitted()['update:active'][0]).toEqual([true])
  })
})

import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import BaseButton from "@/components/atoms/BaseButton.vue"
import { defaultConfig } from "@/helpers/tests"

describe("BaseButton", () => {
  it("Displays correct message as props", () => {
    const setup = defaultConfig({ props: { text: "Test" } })
    const wrapper = mount(BaseButton, setup)

    expect(wrapper.text()).toContain("Test")
  })

  it("Applies correct class when provided", () => {
    const setup = defaultConfig({ props: { type: "secondary" } })
    const wrapper = mount(BaseButton, setup)

    expect(wrapper.classes("base-button--secondary")).toBe(true)
  })

  it("Reverts to primary class when incorrect type is provided", () => {
    const setup = defaultConfig({ props: { type: "Test" } })
    const wrapper = mount(BaseButton, setup)

    expect(wrapper.classes("base-button--primary")).toBe(true)
  })
})

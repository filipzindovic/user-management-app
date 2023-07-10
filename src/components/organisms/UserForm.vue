<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import Multiselect from "vue-multiselect"
import BaseButton from "@/components/atoms/BaseButton.vue"
import BaseInput from "@/components/atoms/BaseInput.vue"
import BaseLabel from "@/components/atoms/BaseLabel.vue"
import { useCountriesStore } from "@/stores/countries"
import { useToast } from "vue-toastification"
import { USER_LABELS } from "@/constants/user"

const toast = useToast()
const countriesStore = useCountriesStore()
const { countriesData } = storeToRefs(countriesStore)

const props = defineProps({
  name: {
    type: String,
    default: ""
  },
  country: {
    type: Object,
    default: () => ({})
  },
  modifiedBy: {
    type: String,
    default: ""
  }
})

const emit = defineEmits(["save"])
const nameValue = ref(props.name)
const countryValue = ref(props.country)
const modifiedByValue = ref(props.modifiedBy)

function handleSaveClick(e) {
  e.preventDefault()
  if (!nameValue?.value?.length) {
    toast.error("Name is required")
    return
  }

  const userObject = {
    name: nameValue?.value,
    cc: countryValue?.value?.cc,
    "modified-by": modifiedByValue?.value
  }
  emit("save", userObject)
}
</script>

<template>
  <form class="user-form">
    <div class="user-form__block">
      <BaseLabel for="name">{{ USER_LABELS.name }}*</BaseLabel>
      <BaseInput v-model="nameValue" type="text" name="name" id="name" />
    </div>
    <div class="user-form__block">
      <BaseLabel for="country">{{ USER_LABELS.cc }}</BaseLabel>
      <Multiselect
        v-model="countryValue"
        class="user-form__block__item"
        placeholder="Select a country"
        track-by="name"
        label="name"
        :options="countriesData"
      >
        <template #selection="{ values }">{{ values?.name }}</template>
      </Multiselect>
    </div>
    <div class="user-form__block">
      <BaseLabel for="name">{{ USER_LABELS["modified-by"] }}</BaseLabel>
      <BaseInput v-model="modifiedByValue" type="text" name="name" id="name" />
    </div>
    <div class="user-form__actions">
      <BaseButton @click="handleSaveClick" text="Save" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.user-form {
  display: flex;
  gap: 12px;

  @media only screen and (max-width: $medium-breakpoint) {
    flex-direction: column;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__item {
      width: 200px;
      border: 1px solid $light-contrast;
      border-radius: 4px;

      @media only screen and (max-width: $medium-breakpoint) {
        width: 100%;
      }

      :deep(.multiselect__tags) {
        border: none;
      }
    }
  }

  &__actions {
    flex: 1;
    align-self: flex-end;
    text-align: right;
  }
}
</style>

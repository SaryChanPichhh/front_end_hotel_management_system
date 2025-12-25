<script setup lang="ts">
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
</script>

<template>
  <FieldSet class="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
    <FieldGroup class="space-y-6">
      <Field>
        <Input
          id="username"
          type="text"
          placeholder="ឈ្មោះគណនីប្រើប្រាស់"
          class="w-full py-5"
        />
        <FieldDescription>
          Choose a unique username for your account.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel for="password">Password</FieldLabel>
        <Input
          id="password"
          type="password"
          placeholder="********"
          class="w-full py-5"
        />
        <FieldDescription>
          Must be at least 8 characters long.
        </FieldDescription>
      </Field>
    </FieldGroup>
  </FieldSet>
</template>

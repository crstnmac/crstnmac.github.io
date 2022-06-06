<template>
  <div class="flex flex-col justify-center items-start mx-auto pb-16">
    <div class="flex flex-col-reverse w-full sm:flex-row items-center">
      <div class="flex flex-col pr-8 ml-6">
        <div class="text-4xl font-extrabold">Criston Mascarenhas</div>
        <div class="text-sm">
          Software Engineer at
          <Anchor
            href="https://globallogic.com"
            target="_blank"
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
            >GlobalLogic</Anchor
          >
        </div>
        <div class="text-md mt-4 font-semibold italic text-gray-400">
          "Make it work, make it right, make it fast." - Kent Beck
        </div>
      </div>
      <div class="mb-8 md:ml-auto w-45">
        <img
          src="https://avatars.githubusercontent.com/u/20360870?v=4"
          class="inline-block w-full rounded-full"
          alt="crstnmac"
          width="100"
          height="100"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

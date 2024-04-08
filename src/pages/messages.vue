<template>
  <div class="bg-white py-4 px-4 rounded-[4px]">
    <table-component
      :columns="columns"
      :items="messages"
      :loading="loading"
      @tableButtonClick="viewDetails"
    >
      <template #tableHeader>
        <div>
          <top-header :title="title" :desc="desc" />
        </div>
      </template>
    </table-component>

    <vDialog
      v-model:visible="visible"
      maximizable
      modal
      header="Message Details"
      :style="{ width: '35rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <h5 class="font-semibold">{{ details.name }}</h5>
      <h6 class="mb-5 text-gray-500 text-xs">{{ details.email }}</h6>
      <p v-text="details.message" class="text-sm"></p>
    </vDialog>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebaseApp from '@/https/firebase' // Import your Firebase configuration file
import TableComponent from '@/components/assets/table.vue'
import TopHeader from '@/components/utils/top-header.vue'
export default {
  components: {
    TableComponent,
    TopHeader
  },
  data() {
    return {
      title: 'Reviews',
      desc: 'This shows the list of all reviews',
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'email', header: 'Email' },
        { field: 'timestamp', header: 'Date' },
        { field: 'actions', header: '' }
      ],
      loading: false,
      messages: [],
      details: {},
      visible: false
    }
  },

  methods: {
    async fetchContactMessages() {
      this.loading = true
      try {
        const db = getFirestore(firebaseApp)
        const querySnapshot = await getDocs(collection(db, 'contactMessages'))
        const messages = []
        querySnapshot.forEach((doc) => {
          messages.push(doc.data())
        })
        this.messages = messages
        console.log(messages, 'kkkk')
      } catch (error) {
        console.error('Error fetching messages:', error)
      } finally {
        this.loading = false
      }
    },
    viewDetails(e) {
      this.details = e
      this.visible = true
    }
  },

  beforeMount() {
    this.fetchContactMessages()
  }
}
</script>

<style></style>

<script setup>
//import ref
import { ref } from "vue";

//import router
import { useRouter } from "vue-router";

//import api
import api from "../../api";

//init router
const router = useRouter();

//define state
const image = ref("");
const title = ref("");
const content = ref("");
const errors = ref([]);

//method for handle file changes
const handleFileChange = (e) => {
  //assign file to state
  image.value = e.target.files[0];
};

//method "storePost"
const storePost = async () => {
  //init formData
  let formulirData = new FormData();

  //assign state value to formData
  formulirData.append("image", image.value);
  formulirData.append("title", title.value);
  formulirData.append("content", content.value);
  //store data with API
  await api
    .post("/api/posts", formulirData)
    .then(() => {
      //redirect
      router.push({ path: "/posts" });
    })
    .catch((error) => {
      //assign response error data to state "errors"
    });
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <form @submit.prevent="storePost()">
              <div class="mb-3">
                <label class="form-label fw-bold">Image</label>
                <input type="file" class="form-control" @change="handleFileChange($event)" />
                <div v-if="errors.image" class="alert alert-danger mt-2">
                  <span>{{ errors.image[0] }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Title</label>
                <input type="text" class="form-control" v-model="title" placeholder="Title Post" />
                <div v-if="errors.title" class="alert alert-danger mt-2">
                  <span>{{ errors.title[0] }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Content</label>
                <textarea class="form-control" v-model="content" rows="5" placeholder="Content Post"></textarea>
                <div v-if="errors.content" class="alert alert-danger mt-2">
                  <span>{{ errors.content[0] }}</span>
                </div>
              </div>
              <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Todo",
  computed: {
    ...mapState(["task"]),
  },
  methods: {
    ...mapActions(["addTask", "removeTask"]),
    sumbitForm() {
      this.addTask(this.newTask);
      this.newTask = "";
    },
  },
  props: {
    propTasks: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      newTask: "",
      tasks: [
        {
          name: "Task 1",
        },
        {
          name: "Task 2",
        },
        {
          name: "Task 3",
        },
      ],
    };
  },
};
</script>

<template>
  <v-app>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <div :class="$style.todo">
          <v-toolbar-title>Checklist</v-toolbar-title>
          <v-input>
            <v-text-field
              v-model="newTask"
              placeholder="Add a task"
              type="text"
            >
            </v-text-field>
            <v-btn
              @click="addTask(newTask)"
              color="primary"
              style="
                border-radius: 20px;
                font-size: 15px;
                margin-left: 10px;
                text-transform: none;
              "
              >Add a task</v-btn
            >
          </v-input>

          <v-list>
            <v-list-item :propTask="tasks" v-for="(tasks, i) in tasks" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ tasks.name }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn @click="removeTask(i)" color="primary">Remove</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<style module lang="scss">
@import "@/assets/variables.scss";

.todo {
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 15px;
  width: 400px;
  max-width: 100%;

  .theme--dark.v-input input,
  .theme--dark.v-input textarea {
    color: #000 !important;
  }
}

// h1 {
//   text-align: start;
//   margin-bottom: 20px;
// }
// form {
//   display: flex;
//   input {
//     flex: 1;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     outline: none;
//   }
//   button {
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     margin-left: 10px;
//     background: #eee;
//     cursor: pointer;
//   }
</style>

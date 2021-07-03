<template>
  <div class="container-md q-pt-xl">
    <q-card class="my-card">
      <div class="row q-pa-md">
        <div class="col-12 col-md-7 q-pa-md">
          <div class=" full-width ">
            <!-- start -->

            <q-toolbar
              class="text-primary row justify-between items-center q-mb-lg toolbar__area"
            >
              <q-btn
                color="primary"
                flat
                label=""
                icon="chevron_left"
                @click="onPrev"
              />
              <h6 class=" text-weight-bold q-my-none text-capitalize ">
                {{ title }}
              </h6>
              <q-btn
                color="primary"
                flat
                label=""
                icon="chevron_right"
                @click="onNext"
              />
            </q-toolbar>
            <q-separator class="full-width" />
            <q-calendar
              ref="calendar"
              v-model="selectedDate"
              view="month"
              :short-weekday-label="shortWeekdayLabel"
              :short-month-label="shortMonthLabel"
              @change="onChange"
            />

            <!-- end -->
          </div>
        </div>
        <div class="col-12  row col-md-5 q-pt-md">
          <div
            class="q-gutter-md flex justify-md-around justify-sm-center justify-around"
          >
            <q-btn color="white" text-color="black">
              08:00am – 09:00am

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              09:00am – 10:00am

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              10:00am – 11:00am

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              11:00am – 12:00pm

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              12:00pm – 01:00pm

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              01:00pm – 02:00pm

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              02:00pm – 03:00pm

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              03:00pm – 04:00pm

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              04:00pm – 05:00pm

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
            <q-btn color="white" text-color="black">
              05:00pm – 06:00pm

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                4 slots available
              </q-tooltip>
            </q-btn>
          </div>

          <div
            class=" self-end flex full-width q-pt-xl q-pr-sm justify-end justify-sm-center"
          >
            <q-btn color=" bg-blue-1 " text-color="black" class="btn__primary">
              book appointment

              <q-tooltip
                class=" bg-amber "
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
              >
                book appointment
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
    </q-card>

    <!-- dialog box  -->

    <!-- dialog box  -->
  </div>
</template>

<script>
import "@quasar/quasar-ui-qcalendar/dist/index.css";
// import QCalendar from 'ui';
import { QCalendar } from "@quasar/quasar-ui-qcalendar";
import { date } from "quasar";

export default {
  components: {
    QCalendar
  },
  computed: {
    title() {
      return date.formatDate(this.selectedDate, "MMMM-YYYY");
    }
  },

  data() {
    return {
      selectedDate: date.formatDate(new Date(), "YYYY-MM-DD"),
      shortWeekdayLabel: false,
      shortMonthLabel: false,
      dateFormatter: undefined,
      start: undefined
    };
  },
  beforeMount() {
    this.updateFormatter();
  },

  watch: {
    locale() {
      this.updateFormatter();
      this.updateTitle();
    }
  },

  methods: {
    onChange({ start }) {
      this.start = start;
      this.updateTitle();
    },

    onPrev() {
      this.$refs.calendar.prev();
    },

    onNext() {
      this.$refs.calendar.next();
    },

    updateTitle() {
      const myDate = QCalendar.makeDate(this.start);
      if (this.dateFormatter !== undefined) {
        this.title = this.dateFormatter.format(myDate);
      }
    },

    updateFormatter() {
      try {
        this.dateFormatter = new Intl.DateTimeFormat(this.locale || undefined, {
          month: this.shortMonthLabel ? "short" : "long",
          year: "numeric",
          timeZone: "UTC"
        });
      } catch (e) {
        // console.error('Intl.DateTimeFormat not supported')
        this.dateFormatter = undefined;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar__area {
  box-shadow: 0px 5px 11px 0px #e3f2fd;
  border-radius: 7px;
}
.q-calendar {
  box-shadow: 0px 5px 11px 0px #e3f2fd;
  padding: 10px;
}
div.q-calendar-weekly__head-weekday {
  font-size: 0.5rem !important;
  .ellipsis {
    font-size: 0.5rem !important;
  }
}
</style>

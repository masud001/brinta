<template>
  <div class="container-md q-mb-lg">
    <div class="row">
      <div class="col-12">
        <div class="table">
          <div class="table-cell">
            <h2 class=" text-h4 q-my-none text-weight-bolder ">
              Carte Services
            </h2>
          </div>
          <div class="table-cell platform">
            <h3>Standard</h3>
            <!-- <a href="" class="btn">register now</a> -->
          </div>
          <div class="table-cell enterprise">
            <h3>Oversize</h3>
            <!-- <a href="" class="btn">Send us a Email</a> -->
          </div>
          <div class="table-cell cell-feature">Seat Cleaning</div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">30$</h5>
          </div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">40$</h5>
          </div>
          <div class="table-cell cell-feature">Leather Creme Care</div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">45$</h5>
          </div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">55$</h5>
          </div>
          <div class="table-cell cell-feature">Hand Wax & Paint Sealant</div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">35$</h5>
          </div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">45$</h5>
          </div>
          <div class="table-cell cell-feature">Carpet Cleaning (w/o mats)</div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">35$</h5>
          </div>
          <div class="table-cell">
            <h5 class=" q-my-none text-weight-bold ">45$</h5>
          </div>
          <div class="table-cell cell-feature">Mal Odor Treatment</div>
          <!-- <div class="table-cell">10 usd</div> -->
          <div class="table-cell  table-cell-double">
            <h5 class=" q-my-none text-weight-bold ">10$</h5>
          </div>

          <div class="table-cell cell-feature">Buffing & Waxing</div>
          <!-- <div class="table-cell"></div> -->
          <div class="table-cell table-cell-double">
            <h5 class=" q-my-none text-weight-bold ">Custom Quote</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarteServices"
};
</script>

<style lang="scss" scoped>
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

@mixin transition($args...) {
  -webkit-transition: $args;
  -moz-transition: $args;
  -ms-transition: $args;
  -o-transition: $args;
  transition: $args;
}

body {
  color: slategray;
}

.table {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 2rem 0rem 0rem 0rem;
  max-width: 100%;
}

.table-cell {
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  padding: 0.8em 1.2em;
  overflow: hidden;
  list-style-type: none;
  outline: 1px solid #ddd;
  text-align: center;
  font-weight: 300;
  margin: {
    top: 1px;
    left: 1px;
  }
  &:first-child {
    outline: 1px solid #fff;
    background: transparent;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  &:nth-child(3) {
    outline: 1px solid #30305b;
  }
  &:nth-child(-n + 3) {
    padding: {
      top: 40px;
      bottom: 40px;
    }
  }
  > h3 {
    font-size: 26px;
    margin: {
      top: 0;
      bottom: 3rem;
    }
  }
  > h5 {
    color: rgb(0, 0, 0);
  }
  &.cell-feature {
    text-align: left;
    font-size: 18px;
  }
  &.platform {
    color: rgb(201, 59, 236);
  }
  &.enterprise {
    background-color: #30305b;
    color: #85bafc;
  }
}

/* Table columns
================================== */
.table-cell {
  width: calc(33.33% - 1px);
  &.cell-feature {
    @media only screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
  &.table-cell-double {
    /* background-color: red; */
    width: 66%;
  }
}
</style>

<template>
  <div class="item">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    />
    <div class="details">
      <h3>ivysaur</h3>
      <div class="order">Grass</div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  width: 340px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
img {
  width: 50px;
  height: 50px;
  margin: 10px 14px;
}
.details {
  margin: 15px 2px;
}
.order {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.374px;
  color: #919698;
}
</style>

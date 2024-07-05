<template>
  <div wh-full flex justify-center pt-12>
    <div class="card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
      <div class="card-content">
        <img :src="imageSrc" alt="Card Image" class="card-image" />
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "/img/exmaple.png",
      title: "Card Title",
      description: "This is a description of the card content.",
      isHovering: false,
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX =
        event.pageX - event.target.offsetLeft - event.target.offsetWidth / 2;
      this.mouseY =
        event.pageY - event.target.offsetTop - event.target.offsetHeight / 2;
      this.isHovering = true;
    },
    handleMouseLeave() {
      this.isHovering = false;
    },
  },
};
</script>

<style>
.card {
  position: relative;
  width: 300px;
  height: 400px;
  perspective: 1000px;
}

.card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition:
    transform 0.5s,
    box-shadow 0.5s;
}

.card:hover .card-content {
  transform: rotateY(10deg) rotateX(-10deg);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: auto;
}

.card-title {
  margin-top: 20px;
}

.card-description {
  margin-top: 10px;
}
</style>

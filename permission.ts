import { useRouter } from "vue-router";

const router = useRouter();
router.beforeEach(async (to, from, next) => {
  console.log(`output->to`, to.meta);
});

router.afterEach((to) => {});

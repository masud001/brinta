const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      {
        path: "/ServicesPage",
        component: () => import("pages/ServicesPage.vue")
      },
      {
        path: "/AppointmentPage",
        component: () => import("pages/AppointmentPage.vue")
      },
      {
        path: "/GalleryPage",
        component: () => import("pages/GalleryPage.vue")
      },
      {
        path: "/AboutUsPage",
        component: () => import("pages/AboutUsPage.vue")
      },
      {
        path: "/ContactUsPage",
        component: () => import("pages/ContactUsPage.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

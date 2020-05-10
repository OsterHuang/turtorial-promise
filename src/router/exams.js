export const allChapter = [
  { name: "Chapter1", title: "基楚認識與使用" },
  { name: "Chapter2", title: "Promise Chain" },
  { name: "Chapter2-1", title: "Promise層層包" },
  { name: "Chapter3-1", title: "多筆同時發送，單筆失敗就停止" },
  { name: "Chapter3-2", title: "多筆同時發送，就算單筆失敗全數完工才停止" },
  { name: "Chapter3-3", title: "多筆依序發送，單筆失數就停止" },
  { name: "Chapter3-4", title: "多筆依序發送，就算單筆失敗全數完工才停止" },
  { name: "Chapter4", title: "async, await" },
  { name: "Chapter4-1", title: "[async, await]-多筆同時發送，單筆失敗就停止" },
  { name: "Chapter4-2", title: "[async, await]-多筆同時發送，全數完工才停止" },
  { name: "Chapter4-3", title: "[async, await]-多筆依序發送，單筆失數就停止" },
  { name: "Chapter4-4", title: "[async, await]-多筆依序發送，全數完工才停止" }
];

export default allChapter.map(val => ({
  name: val.name,
  path: `/exams/${val.name}`,
  meta: { name: val.name, title: val.title },
  component: () => import(`../views/exams/${val.name}.vue`)
}));

// [
// {
//   path: "/exams/chapter1",
//   name: "Chapter1",
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/About.vue")
// }
// ];

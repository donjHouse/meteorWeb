Blog.config(
  {
  blogIndexTemplate: 'blog', // '/blog' route
  blogShowTemplate: 'showBlog',    // '/blog/:slug' route
  pageSize: 10,
  rss: {
    title: 'Донж хаус',
    description: 'Донж хаус'
  },
  shareit: {
    siteOrder: ['twitter', 'facebook', 'pinterest'] // add Pinterest button
  },
  language: {
    blogEmpty: 'Мэдээлэл алга байна. Утас: 7018-0313',
    backToBlogIndex: 'Блог руу буцах',
    loadMore: 'Илүү',
    tags: 'Таг',
    slug: 'Мэдээний URL хаяг | гарчиг байх тохиромжтой',
    metaDescription: 'Meta Description',
    body: 'Body',
    showAsVisual: 'Visual',
    showAsHtml: 'HTML',
    save: 'Хадгалах',
    cancel: 'Цуцлах',
    "delete": 'Устгах',
    metaAuthorBy: 'By',
    metaAuthorOn: 'on',
    edit: 'засах',
    areYouSure: 'Итгэлтэй байна уу?',
    disqusPoweredBy: 'Утас: 7018-0313',
    adminHeader: 'Blog Admin',
    addPost: 'Add Blog Post',
    allPosts: 'Бүх Post-ууд',
    myPosts: 'Миний постууд',
    addPost: 'Post нэмэх',
    editPost: 'Post засах',
    title: 'Гарчиг',
    author: 'Бичээч',
    updatedAt: 'Засагдсан огноо',
    publishedAt: 'Огноо',
    visibleTo: 'Харагдац',
    featuredImage: 'Толгой зураг',
    selectFile: 'Файл сонгох',
    imageAsBackground: 'Use as background for title',
    enterTag: 'таг бичээд ENTER дарна уу',
    postCreateFirst: 'Анхны пост оруулах',
    postVisibilityAdmins: 'Зөвхөн админ-д харагдах',
    postVisibilityLink: 'Зөвхөн link-тэй хүн харах',
    postVisibilityAnyone: 'Сайтад түгээх',
    saved: 'Хадгалагдсан',
    editFeaturedImageSaved: 'Зураг хадгалагдаж дууслаа',
    editErrorSlugExists: 'Ийм URL-тай мэдээ байна',
    editErrorBodyRequired: 'Blog хэсэгт мэдээлэл бичнэ үү6'
  }
});

Meteor.startup(function() {
  const admins = ['tuguldur.01@gmail.com', 'donj_hatsu@yahoo.com'].map(email => Accounts.findUserByEmail(email));
  Roles.addUsersToRoles(admins, 'admin', Roles.GLOBAL_GROUP);
});

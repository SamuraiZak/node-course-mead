const video = {
  title: "a",
  tags: ["a", "b", "c", "d"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title + ": " + tag);
    });
  },
};

video.showTags();

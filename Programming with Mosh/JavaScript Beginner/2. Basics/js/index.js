
const video ={
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags(){
    this.tags.forEach(function(tag){
      console.log(this.title, tag);
    }, this);
  }
};

video.showTags();

/*
a a
a b
a c
*/
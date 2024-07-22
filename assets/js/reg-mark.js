const replaceHtml = (element, pattern, replacement) =>
  {
    const { innerHTML } = element;
    return Object.assign(element, {
      innerHTML: innerHTML.replace(pattern, replacement)
    })
  }

document.addEventListener('DOMContentLoaded', function(e){
   replaceHtml(e.target, /<sup>&reg;<\/sup>®/gi, "<sup>&reg;</sup>") 
  });

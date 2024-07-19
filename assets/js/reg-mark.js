document.addEventListener('DOMContentLoaded', function(){
    document.body.innerHTML =
      document.body.innerHTML
      .replace(/((?!<sup>\s*))&reg;((?!\s*<\/sup>))/gi, '<sup>&reg;</sup>')
      .replace(/((?!<sup>\s*))®((?!\s*<\/sup>))/gi, '<sup>&reg;</sup>');
});

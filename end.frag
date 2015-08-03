$.fn.destroyNumberMask = function() {
    this.unbind('keypress').unbind('keyup').unbind('blur');
};
return $;
}));
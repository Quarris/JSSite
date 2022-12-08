routes['home'] = function() {
    this.setup = function() {
        document.getElementsByTagName('main')[0].innerHTML = "Hello Home!"
    }

    return {
        title: 'Home',
        setup: this.setup
    }
}


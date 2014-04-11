function QuickReply() {
    document.addEventListener('mousemove', this.mousePos, false);

    this.addButtons();
}

QuickReply.prototype.mousePos = function(e) {
    window.pageX = e.pageX;
    window.pageY = e.pageY;
}

QuickReply.prototype.addButtons = function() {
    replies = document.getElementsByClassName('reply');

    for (i = 0; i < replies.length; i++) {
        reply = replies[i];
        parent_id = reply.parentNode.parentNode.parentNode.parentNode.id.split('replies')[1][0]  // this shit is serious?!?!!
        post_id = reply.id.split('reply')[1]

        extrabtns = reply.getElementsByClassName('extrabtns')[0]
        extrabtns.appendChild(this.createButton(parent_id, post_id));
    }
}

QuickReply.prototype.createButton = function(parent_id, post_id) { 
    a = document.createElement('a');
    a.href = '#';
    a.onclick = function(e) {
        var qr = document.getElementById('quickreply');

        // copy post password
        // copy post name
        // put thread id
        // fill message box

        qr.style.display = 'block';
        qr.style.left = window.pageX;
        qr.style.top = window.pageY;

        e.preventDefault();
    }

    img = document.createElement('img');
    img.src = '/css/icons/blank.gif';
    img.className = 'quickreply'  // kusaba's default class

    a.appendChild(img);

    return a
}

window.onload = function() {
    new QuickReply();
}

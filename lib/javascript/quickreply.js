function QuickReply() {
    document.addEventListener('mousemove', this.mousePos, false);

    this.addButtons();
    this.createForm();
}

QuickReply.prototype.mousePos = function(e) {
    window.pageX = e.pageX;
    window.pageY = e.pageY;
}

QuickReply.prototype.addButtons = function() {
    replies = document.getElementsByClassName('reply');

    for (i = 0; i < replies.length; i++) {
        reply = replies[i];
        parentid = reply.parentNode.parentNode.parentNode.parentNode.id.split('replies')[1][0]  // FUCK THE POLICE!!
        postid = reply.id.split('reply')[1]

        extrabtns = reply.getElementsByClassName('extrabtns')[0]
        extrabtns.appendChild(this.createButton(parentid, postid));
    }
}

QuickReply.prototype.createButton = function(parentid, postid) { 
    a = document.createElement('a');
    a.href = '#';
    a.onclick = this.formHandler;

    img = document.createElement('img');
    img.src = '/css/icons/blank.gif';
    img.className = 'quickreply'  // kusaba's default class

    a.appendChild(img);

    return a;  // we need to return it because closures in javascript are awful
}

QuickReply.prototype.createForm = function() {
    // Maybe, only maybe we can copy default form to a div and put this div
    // under mouse cursor instead of creating it from zero

    var quickform = document.getElementById('postform').cloneNode(true);

    var container = document.createElement('div')
    container.style.display = 'none';
    container.style.position = 'absolute';
    container.style.width = '450px';
    container.style.background = '#fff';
    container.id = 'quickreplyx';

    var header = document.createElement('div');
    header.innerHTML = '<h1>Quickreply</h1>';

    var content = document.createElement('div');
    content.appendChild(quickform)

    container.appendChild(header);
    container.appendChild(content);

    document.body.appendChild(container);
}

QuickReply.prototype.formHandler = function(e) {
    // try {
    //     document.getElementById('qr-name').value = getCookie("name");
    // }
    // catch (e) {
    //     // ALL GLORY TO HYPNOTOAD!!
    // }
    // document.getElementById('qr-em').value = getCookie("email");
    // document.getElementById('qr-password').value = get_password("postpassword");
    // document.getElementById('qr-parentid').value = parentid;
    // document.getElementById('qr-info').innerHTML = 'Reply to: #' + postid + ' in: #' + parentid;

    // var messagearea = document.getElementById('qr-message');
    // messagearea.value = '>>' + postid + '\n';
    // // messagearea.onfocus = function() {
    // //     this.value = this.value; // just to move cursor to the end
    // // }

    var qr = document.getElementById('quickreplyx');
    qr.style.display = 'block';
    qr.style.left = window.pageX + 'px';
    qr.style.top = window.pageY + 'px';

    // messagearea.focus();

    e.preventDefault();
}

window.onload = function() {
    new QuickReply();
}

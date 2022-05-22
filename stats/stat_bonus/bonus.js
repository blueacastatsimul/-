const input = document.querySelector('#sub');
    input.addEventListener('click', () => {
        
        opener.document.getElementById("bonus_atk").innerHTML = parseFloat(document.getElementById('bonus_atk').value)
        opener.document.getElementById("bonus_atkP").innerHTML = parseFloat(document.getElementById('bonus_atkP').value)/100
        opener.document.getElementById("bonus_hp").innerHTML = parseFloat(document.getElementById('bonus_hp').value)
        opener.document.getElementById("bonus_hpP").innerHTML = parseFloat(document.getElementById('bonus_hpP').value)/100
        opener.document.getElementById("bonus_def").innerHTML = parseFloat(document.getElementById('bonus_def').value)
        opener.document.getElementById("bonus_defP").innerHTML = parseFloat(document.getElementById('bonus_defP').value)/100
        opener.document.getElementById("bonus_heal").innerHTML = parseFloat(document.getElementById('bonus_heal').value)
        opener.document.getElementById("bonus_healP").innerHTML = parseFloat(document.getElementById('bonus_healP').value)/100
        opener.document.getElementById("bonus_evade").innerHTML = parseFloat(document.getElementById('bonus_evade').value)
        opener.document.getElementById("bonus_evadeP").innerHTML = parseFloat(document.getElementById('bonus_evadeP').value)/100
        opener.document.getElementById("bonus_crate").innerHTML = parseFloat(document.getElementById('bonus_crt').value)
        opener.document.getElementById("bonus_crateP").innerHTML = parseFloat(document.getElementById('bonus_crtP').value)/100
        opener.document.getElementById("bonus_cdmg").innerHTML = parseFloat(document.getElementById('bonus_crtd').value)
        opener.document.getElementById("bonus_cdmgP").innerHTML = parseFloat(document.getElementById('bonus_crtdP').value)/100
        opener.document.getElementById("bonus_acc").innerHTML = parseFloat(document.getElementById('bonus_acc').value)
        opener.document.getElementById("bonus_accP").innerHTML = parseFloat(document.getElementById('bonus_accP').value)/100
        opener.document.getElementById("bonus_cres").innerHTML = parseFloat(document.getElementById('bonus_crtres').value)
        opener.document.getElementById("bonus_cresP").innerHTML = parseFloat(document.getElementById('bonus_crtresP').value)/100
        opener.document.getElementById("bonus_cdmres").innerHTML = parseFloat(document.getElementById('bonus_cdres').value)
        opener.document.getElementById("bonus_cdmresP").innerHTML = parseFloat(document.getElementById('bonus_cdresP').value)/100
        opener.document.getElementById("bonus_ccup").innerHTML = parseFloat(document.getElementById('bonus_ccup').value)
        opener.document.getElementById("bonus_ccupP").innerHTML = parseFloat(document.getElementById('bonus_ccupP').value)/100
        opener.document.getElementById("bonus_ccres").innerHTML = parseFloat(document.getElementById('bonus_ccres').value)
        opener.document.getElementById("bonus_ccresP").innerHTML = parseFloat(document.getElementById('bonus_ccresP').value)/100
        window.close()
});

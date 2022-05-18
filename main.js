import { student, stu_detail, stu_list, stu_skill } from "./student.js"
import { equipList } from "./equipment.js"
import { stu_bond } from "./bond.js"
import { average, checkfor, checkforstudent, crit_chance, dmg_cal, hit_chance } from "./func.js"
import { boss_list, c_boss } from "./boss.js"

let input_name = "나츠"
let input_lev = 73
let input_star = 5
let input_exlev = 5
let input_s1lev = 10
let input_s2lev = 10
let input_s3lev = 10
let input_eq1 = 0
let input_eq2 = 0
let input_eq3 = 0
let input_bond = 1

var lst = document.getElementById("name_list")

stu_list.forEach(element => {
    var option = document.createElement('option')
    option.value = element[0]
    lst.appendChild(option)
});
export let stu = new student (input_lev,input_star, input_name)

display()

const input = document.querySelector('#input');
input.addEventListener('click', () => {
    input_name = document.getElementById('input_name').value
    input_lev = document.getElementById('input_lev').value
    input_star = document.getElementById('input_star').value
    input_exlev = document.getElementById('input_exlev').value
    input_s1lev = document.getElementById('input_s1lev').value
    input_s2lev = document.getElementById('input_s2lev').value
    input_s3lev = document.getElementById('input_s3lev').value
    input_eq1 = document.getElementById('input_eq1').value;
    input_eq2 =input_eq2 = document.getElementById('input_eq2').value;
    input_eq3 = document.getElementById('input_eq3').value;
    input_bond = document.getElementById('input_bond').value;

    if ( isNaN(input_lev) || ( input_lev < 1 || input_lev > 100 )) {
        alert("학생 레벨 오류\n처리할 수 없는 수입니다!\n1~100사이의 정수를 입력해주시기 바랍니다!")
        throw "처리할 수 없는 레벨입니다! 입력된 레벨 : "+input_lev
    } else if ( isNaN(input_star) || ( input_star < 1 || input_star > 5 )) { 
        alert("학생 성급 오류\n처리할 수 없는 수입니다!\n1~5사이의 정수를 입력해주시기 바랍니다!")
        throw "처리할 수 없는 성급입니다! 입력된 성급 : "+input_star
    }
    if ( isNaN(input_exlev) || ( input_exlev < 1 || input_exlev > 5 )) { 
        input_exlev = 5
    }
    if ( isNaN(input_s1lev) || ( input_s1lev < 1 || input_s1lev > 10 )) { 
        input_s1lev = 10
    }
    if ( isNaN(input_s2lev) || ( input_s2lev < 1 || input_s2lev > 10 )) { 
        input_s2lev = 10
    }
    if ( isNaN(input_s3lev) || ( input_s3lev < 1 || input_s3lev > 10 )) { 
        input_s3lev = 10
    }

    stu = new student (input_lev,input_star, input_name)
    display()

});


function display() {
    if (input_eq1 > 0 && input_eq1 <=6) {
        stu.bonus_equip(stu.equip1, input_eq1, equipList)
        document.getElementById("equip1_detail").innerHTML = stu.equip1_detail;
    } else { document.getElementById("equip1_detail").innerHTML = "장비 없음"; }
    
    if (input_eq2 > 0 && input_eq2 <=6) {
        stu.bonus_equip(stu.equip2, input_eq2, equipList)
        document.getElementById("equip2_detail").innerHTML = stu.equip2_detail;
    } else { document.getElementById("equip2_detail").innerHTML = "장비 없음"; }

    if (input_eq3 > 0 && input_eq3 <=6) {
        stu.bonus_equip(stu.equip3, input_eq3, equipList)
        document.getElementById("equip3_detail").innerHTML = stu.equip3_detail;
    } else { document.getElementById("equip3_detail").innerHTML = "장비 없음"; }

    stu.bonus_sum_atk += isNaN(parseFloat(document.getElementById('bonus_atk').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_atk').innerHTML)
    stu.bonus_times_atk += isNaN(parseFloat(document.getElementById('bonus_atkP').innerHTML)) ? 0 : parseFloat(document.getElementById('bonus_atkP').innerHTML)
    stu.bonus_sum_hp += isNaN(parseFloat(document.getElementById('bonus_hp').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_hp').innerHTML)
    stu.bonus_times_hp += isNaN(parseFloat(document.getElementById('bonus_hpP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_hpP').innerHTML)
    stu.bonus_sum_def += isNaN(parseFloat(document.getElementById('bonus_def').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_def').innerHTML)
    stu.bonus_times_def += isNaN(parseFloat(document.getElementById('bonus_defP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_defP').innerHTML)
    stu.bonus_sum_heal += isNaN(parseFloat(document.getElementById('bonus_heal').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_heal').innerHTML)
    stu.bonus_times_heal += isNaN(parseFloat(document.getElementById('bonus_healP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_healP').innerHTML)
    stu.bonus_sum_evade += isNaN(parseFloat(document.getElementById('bonus_evade').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_evade').innerHTML)
    stu.bonus_times_evade += isNaN(parseFloat(document.getElementById('bonus_evadeP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_evadeP').innerHTML)
    stu.bonus_sum_CRate += isNaN(parseFloat(document.getElementById('bonus_CRate').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_CRate').innerHTML)
    if (isNaN(stu.btcr)) {
        stu.btcr = 0
    }
    if (isNaN(parseFloat(document.getElementById('bonus_CRateP').innerHTML))) {
        stu.btcr += 0
    } else { stu.btcr += parseFloat(document.getElementById('bonus_CRateP').innerHTML)}

    stu.bonus_sum_CDmg += isNaN(parseFloat(document.getElementById('bonus_CDmg').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_CDmg').innerHTML)
    stu.bonus_times_CDmg += isNaN(parseFloat(document.getElementById('bonus_CDmgP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_CDmgP').innerHTML)
    stu.bonus_sum_acc += isNaN(parseFloat(document.getElementById('bonus_acc').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_acc').innerHTML)
    stu.bonus_times_acc += isNaN(parseFloat(document.getElementById('bonus_accP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_accP').innerHTML)
    stu.bonus_sum_Cres += isNaN(parseFloat(document.getElementById('bonus_Cres').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_Cres').innerHTML)
    stu.bonus_times_Cres += isNaN(parseFloat(document.getElementById('bonus_CresP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_CresP').innerHTML)
    stu.bonus_sum_Cdmres += isNaN(parseFloat(document.getElementById('bonus_Cdmres').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_Cdmres').innerHTML)
    stu.bonus_times_Cdmres += isNaN(parseFloat(document.getElementById('bonus_CdmresP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_CdmresP').innerHTML)
    stu.bonus_sum_ccup += isNaN(parseFloat(document.getElementById('bonus_ccup').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccup').innerHTML)
    stu.bonus_times_ccup += isNaN(parseFloat(document.getElementById('bonus_ccupP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccupP').innerHTML)
    stu.bonus_sum_ccres += isNaN(parseFloat(document.getElementById('bonus_ccres').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccres').innerHTML)
    stu.bonus_times_ccres += isNaN(parseFloat(document.getElementById('bonus_ccresP').innerHTML)) ? 0 :  parseFloat(document.getElementById('bonus_ccresP').innerHTML)

    stu.bonus_bond(input_name,input_bond,stu_bond)
    stu.bonus_cal()
    
    document.getElementById("stu_name").innerHTML = stu.name;
    document.getElementById("stu_lev").innerHTML = stu.lev;
    document.getElementById("stu_star").innerHTML = stu.star;
    document.getElementById("stu_atk").innerHTML = parseInt(stu.atk);
    document.getElementById("stu_atk1").innerHTML = parseInt(stu.atk);
    document.getElementById("stu_def").innerHTML = parseInt(stu.def);
    document.getElementById("stu_def1").innerHTML = parseInt(stu.def);
    document.getElementById("stu_hp").innerHTML = parseInt(stu.hp);
    document.getElementById("stu_hp1").innerHTML = parseInt(stu.hp);
    document.getElementById("stu_heal").innerHTML = parseInt(stu.heal);
    document.getElementById("stu_heal1").innerHTML = parseInt(stu.heal);
    document.getElementById("stu_acc").innerHTML = parseInt(stu.acc);
    document.getElementById("stu_evade").innerHTML = parseInt(stu.evade);
    document.getElementById("stu_crt").innerHTML = parseInt(stu.CRate);
    document.getElementById("stu_crtDmg").innerHTML = parseInt(stu.CDmg_display);
    document.getElementById("stu_stab").innerHTML = parseInt(stu.stab);
    document.getElementById("stu_range").innerHTML = parseInt(stu.range);
    document.getElementById("stu_ccup").innerHTML = parseInt(stu.ccup);
    document.getElementById("stu_ccres").innerHTML = parseInt(stu.ccres);
    document.getElementById("stu_cost").innerHTML = 700;

    document.getElementById("box5").innerHTML = stu_detail[stu.stuNum][1]
    document.getElementById("box5_1").innerHTML = stu_detail[stu.stuNum][2]

    document.getElementById("stu_urban").innerHTML = stu.urban;
    document.getElementById("stu_urban1").innerHTML = stu.urban;
    document.getElementById("stu_outdoor").innerHTML = stu.outdoor;
    document.getElementById("stu_outdoor1").innerHTML = stu.outdoor;
    document.getElementById("stu_indoor").innerHTML = stu.indoor;
    document.getElementById("stu_indoor1").innerHTML = stu.indoor;

    document.getElementById("stu_ex_name").innerHTML = stu_skill[stu.stuNum][1];
    document.getElementById("stu_ex_cost").innerHTML = stu_skill[stu.stuNum][2];
    document.getElementById('ex_lev').innerHTML = input_exlev;
    document.getElementById("stu_ex_detail").innerHTML = stu_skill[stu.stuNum][Number(input_exlev)+2];
    document.getElementById("stu_s1_name").innerHTML = stu_skill[stu.stuNum][8];
    document.getElementById('s1_lev').innerHTML = input_s1lev;
    document.getElementById("stu_s1_detail").innerHTML = stu_skill[stu.stuNum][Number(input_s1lev)+8];
    document.getElementById("stu_s2_name").innerHTML = stu_skill[stu.stuNum][19];
    document.getElementById('s2_lev').innerHTML = input_s2lev;
    document.getElementById("stu_s2_detail").innerHTML = stu_skill[stu.stuNum][Number(input_s2lev)+19];
    document.getElementById("stu_s3_name").innerHTML = stu_skill[stu.stuNum][30];
    document.getElementById('s3_lev').innerHTML = input_s3lev;
    document.getElementById("stu_s3_detail").innerHTML = stu_skill[stu.stuNum][Number(input_s3lev)+30];
    document.getElementById("display_lv").innerHTML = input_lev;
    
    document.getElementById("box11").innerHTML = stu_detail[stu.stuNum][5]

    document.getElementById("equip1").innerHTML = stu.equip1;
    document.getElementById("equip2").innerHTML = stu.equip2;
    document.getElementById("equip3").innerHTML = stu.equip3;

    switch (stu_detail[stu.stuNum][3]) {
        case "폭발":
            document.getElementById("box6_type").style.backgroundColor = "#930008";
            document.getElementById("box6_type").innerHTML = "폭발"
            break;
        case "관통":
            document.getElementById("box6_type").style.backgroundColor = "#be8a12";
            document.getElementById("box6_type").innerHTML = "관통"
            break;
        case "신비":
            document.getElementById("box6_type").style.backgroundColor = "#226f9d";
            document.getElementById("box6_type").innerHTML = "신비"
            break;
    }

    switch (stu_detail[stu.stuNum][4]) {
        case "경장갑":
            document.getElementById("box7_type").style.backgroundColor = "#930008";
            document.getElementById("box7_type").innerHTML = "경장갑"
            break;
        case "중장갑":
            document.getElementById("box7_type").style.backgroundColor = "#be8a12";
            document.getElementById("box7_type").innerHTML = "중장갑"
            break;
        case "특수장갑":
            document.getElementById("box7_type").style.backgroundColor = "#226f9d";
            document.getElementById("box7_type").innerHTML = "특수장갑"
            break;
    }

    var a=0
    var star_list=""

    while (a<input_star){
        star_list+="⭐"
        a+=1
    }
    document.getElementById("star").innerHTML=star_list

}

let enemy_name = "나츠"
let enemy_lev = 73
let enemy_star = 5
let enemy_bond = 1
let enemy_eq1 = 0
let enemy_eq2 = 0
let enemy_eq3 = 0

let enemy_bonus_hp = 0
let enemy_bonus_hpP = 0
let enemy_bonus_def = 0
let enemy_bonus_defP = 0
let enemy_bonus_evade = 0
let enemy_bonus_evadeP = 0
let enemy_bonus_cres = 0
let enemy_bonus_cresP = 0
let enemy_bonus_cdmres = 0
let enemy_bonus_cdmresP = 0
let type = 1

let skill = 1
let atk_times = 1
let devision = 1
let region = 1

let enemy = new student(enemy_lev, enemy_star, enemy_name)  

const enemy_input = document.querySelector("#enemy_input")
    enemy_input.addEventListener('click', () => {
        enemy_name = document.getElementById('enemy_name').value
        enemy_lev = parseInt(document.getElementById('enemy_lev').value)
        enemy_star = parseInt(document.getElementById('enemy_star').value)
        enemy_bond = parseInt(document.getElementById('enemy_bond').value)
        enemy_eq1 = parseInt(document.getElementById('enemy_eq1').value)
        enemy_eq2 = parseInt(document.getElementById('enemy_eq2').value)
        enemy_eq3 = parseInt(document.getElementById('enemy_eq3').value)

        enemy_bonus_hp = parseInt(document.getElementById("enemy_bonus_hp").value)
        enemy_bonus_hpP = parseFloat(document.getElementById("enemy_bonus_hpP").value)
        enemy_bonus_def = parseInt(document.getElementById("enemy_bonus_def").value)
        enemy_bonus_defP = parseFloat(document.getElementById("enemy_bonus_defP").value)
        enemy_bonus_evade = parseInt(document.getElementById("enemy_bonus_evade").value)
        enemy_bonus_evadeP = parseFloat(document.getElementById("enemy_bonus_evadeP").value)
        enemy_bonus_cres = parseInt(document.getElementById("enemy_bonus_Cres").value)
        enemy_bonus_cresP = parseFloat(document.getElementById("enemy_bonus_CresP").value)
        enemy_bonus_cdmres = parseInt(document.getElementById("enemy_bonus_cdmres").value)
        enemy_bonus_cdmresP = parseFloat(document.getElementById("enemy_bonus_cdmresP").value)

        skill = parseFloat(document.getElementById("skill_dmg").value)

        atk_times = 1
        devision = 1
        if (document.getElementById("dev").value=="번") {
            atk_times = parseInt(document.getElementById("attack_times").value)
        } else {devision = parseInt(document.getElementById("attack_times").value); atk_times = parseInt(document.getElementById("attack_times").value)}
        region = parseFloat(document.getElementById("region").value)

        if ( isNaN(enemy_lev) || ( enemy_lev < 1 || enemy_lev > 100 )) {
            alert("학생 레벨 오류\n처리할 수 없는 수입니다!\n1~100사이의 정수를 입력해주시기 바랍니다!")
            throw "처리할 수 없는 레벨입니다! 입력된 레벨 : "+enemy_lev
        } else if ( isNaN(enemy_star) || ( enemy_star < 1 || enemy_star > 5 )) { 
            alert("학생 성급 오류\n처리할 수 없는 수입니다!\n1~5사이의 정수를 입력해주시기 바랍니다!")
            throw "처리할 수 없는 성급입니다! 입력된 성급 : "+enemy_star
        } else if ( isNaN(enemy_eq1) || ( enemy_eq1 < 0 || enemy_eq1 > 6 )) { 
            enemy_eq1=0
        } else if ( isNaN(enemy_eq2) || ( enemy_eq2 < 0 || enemy_eq2 > 6 )) { 
            enemy_eq2=0
        } else if ( isNaN(enemy_eq3) || ( enemy_eq3 < 0 || enemy_eq3 > 6 )) { 
            enemy_eq3=0
        }
        
        enemy = new student(enemy_lev, enemy_star, enemy_name)  

        enemy.bonus_bond(enemy_name,enemy_bond,stu_bond)
        enemy.bonus_equip(enemy.equip1, enemy_eq1, equipList)
        enemy.bonus_equip(enemy.equip2, enemy_eq2, equipList)
        enemy.bonus_equip(enemy.equip3, enemy_eq3, equipList)

        enemy.bonus_sum_hp += enemy_bonus_hp == 0 ? 0 : enemy_bonus_hp
        enemy.bonus_times_hp += enemy_bonus_hpP == 0 ? 0 : enemy_bonus_hpP/100
        enemy.bonus_sum_def += enemy_bonus_def == 0 ? 0 : enemy_bonus_def
        enemy.bonus_times_def += enemy_bonus_defP == 0 ? 0 : enemy_bonus_defP/100
        enemy.bonus_sum_evade += enemy_bonus_evade == 0 ? 0 : enemy_bonus_evade
        enemy.bonus_times_evade += enemy_bonus_evadeP == 0 ? 0 : enemy_bonus_evadeP/100
        enemy.bonus_sum_Cres += enemy_bonus_cres == 0 ? 0 : enemy_bonus_cres
        enemy.bonus_times_Cres += enemy_bonus_cresP == 0 ? 0 : enemy_bonus_cresP/100
        enemy.bonus_sum_Cdmres += enemy_bonus_cdmres == 0 ? 0 : enemy_bonus_cdmres
        enemy.bonus_times_Cdmres += enemy_bonus_cdmresP == 0 ? 0 : enemy_bonus_cdmresP/100

        enemy.bonus_cal()
        
        switch (stu_detail[stu.stuNum][3]) {
            case "폭발":
                if (stu_detail[enemy.stuNum][4] == "경장갑"){
                    type = 2;
                } else if (stu_detail[enemy.stuNum][4] == "중장갑"){
                    type = 1;
                } else { type = 0.5}
                break;
            case "관통":
                if (stu_detail[enemy.stuNum][4] == "경장갑"){
                    type = 0.5;
                } else if (stu_detail[enemy.stuNum][4] == "중장갑"){
                    type = 2;
                } else { type = 1}
                break;
            case "신비":
                if (stu_detail[enemy.stuNum][4] == "경장갑"){
                    type = 1;
                } else if (stu_detail[enemy.stuNum][4] == "중장갑"){
                    type = 0.5;
                } else { type = 2}
                break;
        }
        let final_dmg = dmg_cal(stu.atk, skill, enemy.def, type, region, devision, stu.stab, false, stu.CDmg, stu.bonus_sum_CDmg, stu.bonus_times_CDmg, enemy.CdmRes)
        let final_crt = dmg_cal(stu.atk, skill, enemy.def, type, region, devision, stu.stab, true, stu.CDmg, stu.bonus_sum_CDmg, stu.bonus_times_CDmg, enemy.CdmRes)

        document.getElementById("hit_chance").innerHTML = (hit_chance(enemy.evade, stu.acc)*100).toFixed(2)
        document.getElementById("crt_chance").innerHTML = (crit_chance(stu.CRate, enemy.CRes)*100).toFixed(2)
        document.getElementById("crt_dm").innerHTML = parseFloat(((stu.CDmg*100-enemy.CdmRes )*(1+stu.bonus_times_CDmg)/10000).toFixed(2))
        
        document.getElementById("atk_flr").innerHTML = parseInt(final_dmg[1])
        document.getElementById("atk_ceil").innerHTML = parseInt(final_dmg[0])
        document.getElementById("atk_avg").innerHTML = parseInt((final_dmg[0]+final_dmg[1])/2)
        
        document.getElementById("crt_flr").innerHTML = parseInt(final_crt[1])
        document.getElementById("crt_ceil").innerHTML = parseInt(final_crt[0])
        document.getElementById("crt_avg").innerHTML = parseInt((final_crt[0]+final_crt[1])/2)

        document.getElementById("f_atk_flr").innerHTML = parseInt(final_dmg[1])*atk_times
        document.getElementById("f_atk_ceil").innerHTML = parseInt(final_crt[0])*atk_times
        document.getElementById("f_atk_avg").innerHTML = parseInt(average((final_dmg[0]+final_dmg[1])/2,(final_crt[0]+final_crt[1])/2,crit_chance(stu.CRate, enemy.CRes),atk_times==1?devision:atk_times))

        document.getElementById("f_enemy_hp").innerHTML = parseInt(enemy.hp)
        document.getElementById("f_enemy_def").innerHTML = parseInt(enemy.def)
        document.getElementById("f_enemy_crtres").innerHTML = parseInt(enemy.CRes)
        document.getElementById("f_enemy_crtdmgres").innerHTML = parseInt(enemy.CdmRes)
        document.getElementById("f_enemy_type").innerHTML = stu_detail[enemy.stuNum][4]
    }
)

const boss_input = document.querySelector("#boss_input")
    boss_input.addEventListener('click', () => {
        let boss_name = "" ? "비나" : document.getElementById("boss_name").value
        let boss_num = checkfor(boss_list, boss_name)[0]
        let boss_lev = parseInt(document.getElementById("boss_lev").value)

        let boss_bonus_def = parseFloat(document.getElementById("boss_bonus_def").value)
        let boss_bonus_defP = parseFloat(document.getElementById("boss_bonus_defP").value/100)
        let boss_bonus_CRes = parseFloat(document.getElementById("boss_bonus_Cres").value)
        let boss_bonus_CResP = parseFloat(document.getElementById("boss_bonus_CresP").value/100)
        let boss_bonus_CdmRes = parseFloat(document.getElementById("boss_bonus_cdmres").value)
        let boss_bonus_CdmResP = parseFloat(document.getElementById("boss_bonus_cdmresP").value/100)

        let boss_hp = boss_list[boss_num+boss_lev][1]
        let boss_atk = boss_list[boss_num+boss_lev][2]
        let boss_def = boss_list[boss_num+boss_lev][3]
        let boss_cres = boss_list[boss_num+boss_lev][4]
        let boss_cdmres = boss_list[boss_num+boss_lev][5]

        let boss = new c_boss(boss_name, boss_hp, boss_atk, boss_def, boss_cres, boss_cdmres)


        boss.bonus_sum_def += isNaN(boss_bonus_def)? 0 : boss_bonus_def
        boss.bonus_times_def += isNaN(boss_bonus_defP)? 0 : boss_bonus_defP
        boss.bonus_sum_CRes=0
        boss.bonus_times_CRes=0
        boss.bonus_times_CdmRes=0
        boss.bonus_sum_CdmRes=0
        boss.bonus_sum_CRes += isNaN(boss_bonus_CRes)? 0 : boss_bonus_CRes
        boss.bonus_times_CRes += isNaN(boss_bonus_CResP)? 0 : boss_bonus_CResP
        boss.bonus_sum_CdmRes += isNaN(boss_bonus_CdmRes)? 0 : boss_bonus_CdmRes
        boss.bonus_times_CdmRes += isNaN(boss_bonus_CdmResP)? 0 : boss_bonus_CdmResP
        
        boss.bonus_cal()

        skill = parseFloat(document.getElementById("skill_dmg").value)

        atk_times = 1
        devision = 1
        if (document.getElementById("dev").value=="번") {
            atk_times = parseInt(document.getElementById("attack_times").value)
        } else {devision = parseInt(document.getElementById("attack_times").value); atk_times = parseInt(document.getElementById("attack_times").value)}
        region = parseFloat(document.getElementById("region").value)

        switch (stu_detail[stu.stuNum][3]) {
            case "폭발":
                if (boss_list[boss_num+boss_lev][6] == "경장갑"){
                    type = 2;
                } else if (boss_list[boss_num+boss_lev][6] == "중장갑"){
                    type = 1;
                } else { type = 0.5}
                break;
            case "관통":
                if (boss_list[boss_num+boss_lev][6] == "경장갑"){
                    type = 0.5;
                } else if (boss_list[boss_num+boss_lev][6] == "중장갑"){
                    type = 2;
                } else { type = 1}
                break;
            case "신비":
                if (boss_list[boss_num+boss_lev][6] == "경장갑"){
                    type = 1;
                } else if (boss_list[boss_num+boss_lev][6] == "중장갑"){
                    type = 0.5;
                } else { type = 2}
                break;
        }

        let final_dmg = dmg_cal(stu.atk, skill, boss.def, type, region, devision, stu.stab, false, stu.CDmg, stu.bonus_sum_CDmg, stu.bonus_times_CDmg, boss.Cdmres)
        let final_crt = dmg_cal(stu.atk, skill, boss.def, type, region, devision, stu.stab, true, stu.CDmg, stu.bonus_sum_CDmg, stu.bonus_times_CDmg, boss.Cdmres)

        document.getElementById("hit_chance").innerHTML = (hit_chance(boss.evade, stu.acc)*100).toFixed(2)
        document.getElementById("crt_chance").innerHTML = (crit_chance(stu.CRate, boss.Cres)*100).toFixed(2)
        document.getElementById("crt_dm").innerHTML = parseFloat(((stu.CDmg*100+stu.bonus_sum_CDmg-boss.Cdmres)*(1+stu.bonus_times_CDmg)/10000).toFixed(2))
        
        document.getElementById("atk_flr").innerHTML = parseInt(final_dmg[1])
        document.getElementById("atk_ceil").innerHTML = parseInt(final_dmg[0])
        document.getElementById("atk_avg").innerHTML = parseInt((final_dmg[0]+final_dmg[1])/2)
        
        document.getElementById("crt_flr").innerHTML = parseInt(final_crt[1])
        document.getElementById("crt_ceil").innerHTML = parseInt(final_crt[0])
        document.getElementById("crt_avg").innerHTML = parseInt((final_crt[0]+final_crt[1])/2)

        document.getElementById("f_atk_flr").innerHTML = parseInt(final_dmg[1])*atk_times
        document.getElementById("f_atk_ceil").innerHTML = parseInt(final_crt[0])*atk_times
        document.getElementById("f_atk_avg").innerHTML = parseInt(average((final_dmg[0]+final_dmg[1])/2,(final_crt[0]+final_crt[1])/2,crit_chance(stu.CRate, boss.Cres),atk_times==1?devision:atk_times))

        document.getElementById("f_enemy_hp").innerHTML = parseInt(boss.hp)
        document.getElementById("f_enemy_def").innerHTML = parseInt(boss.def)
        document.getElementById("f_enemy_crtres").innerHTML = parseInt(boss.Cres)
        document.getElementById("f_enemy_crtdmgres").innerHTML = parseInt(boss.Cdmres)
        document.getElementById("f_enemy_type").innerHTML = boss_list[boss_num+boss_lev][6]


    }
)

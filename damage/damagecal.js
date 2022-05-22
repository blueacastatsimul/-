import { stu_bond } from "../info/bond.js";
import { equipList } from "../info/equipment.js"
import { student, stu_detail, stu_list } from "../info/student.js"
import { boss_list, c_boss } from "./boss.js"
import { crit_chance, dmg_cal, hit_chance, average, checkfor } from "./func.js";

var lst = document.getElementById("name_list")

stu_list.forEach(element => {
    var option = document.createElement('option')
    option.value = element[0]
    lst.appendChild(option)
});

let ally_name = "나츠"
let ally_lev = 73
let ally_star = 5

let ally = new student (ally_lev,ally_star, ally_name)

function ally_cal() {
    let ally_name = document.getElementById('ally_name').value
    let ally_lev = parseInt(document.getElementById('ally_lev').value)
    let ally_star = parseInt(document.getElementById('ally_star').value)
    let ally_bond = parseInt(document.getElementById('ally_bond').value)
    let ally_eq1 = parseInt(document.getElementById('ally_eq1').value)
    let ally_eq2 = parseInt(document.getElementById('ally_eq2').value)
    let ally_eq3 = parseInt(document.getElementById('ally_eq3').value)

    let ally_bonus_atk = parseInt(document.getElementById("ally_bonus_atk").value)
    let ally_bonus_atkP = parseFloat(document.getElementById("ally_bonus_atkP").value)
    let ally_bonus_acc = parseInt(document.getElementById("ally_bonus_acc").value)
    let ally_bonus_accP = parseFloat(document.getElementById("ally_bonus_accP").value)
    let ally_bonus_crate = parseInt(document.getElementById("ally_bonus_crate").value)
    let ally_bonus_crateP = parseFloat(document.getElementById("ally_bonus_crateP").value)
    let ally_bonus_cdmg = parseInt(document.getElementById("ally_bonus_cdmg").value)
    let ally_bonus_cdmgP = parseFloat(document.getElementById("ally_bonus_cdmgP").value)

    skill = parseFloat(document.getElementById("skill_dmg").value)

    if ( isNaN(ally_lev) || ( ally_lev < 1 || ally_lev > 100 )) {
        alert("학생 레벨 오류\n처리할 수 없는 수입니다!\n1~100사이의 정수를 입력해주시기 바랍니다!")
        throw "처리할 수 없는 레벨입니다! 입력된 레벨 : "+ally_lev
    } else if ( isNaN(ally_star) || ( ally_star < 1 || ally_star > 5 )) { 
        alert("학생 성급 오류\n처리할 수 없는 수입니다!\n1~5사이의 정수를 입력해주시기 바랍니다!")
        throw "처리할 수 없는 성급입니다! 입력된 성급 : "+ally_star
    } else if ( isNaN(ally_eq1) || ( ally_eq1 < 0 || ally_eq1 > 6 )) { 
        ally_eq1=0
    }
    if ( isNaN(ally_eq2) || ( ally_eq2 < 0 || ally_eq2 > 6 )) { 
        ally_eq2=0
    }
    if ( isNaN(ally_eq3) || ( ally_eq3 < 0 || ally_eq3 > 6 )) { 
        ally_eq3=0
    }
    if ( isNaN(ally_bond) || ( ally_bond < 0 || ally_bond > 50 )) { 
        ally_eq3=0
    }
        
    ally = new student(ally_lev, ally_star, ally_name)  

    ally.bonus_bond(ally_name,ally_bond, stu_bond)
    ally.bonus_equip(ally.equip1, ally_eq1, equipList)
    ally.bonus_equip(ally.equip2, ally_eq2, equipList)
    ally.bonus_equip(ally.equip3, ally_eq3, equipList)

    ally.bonus_sum_atk += ally_bonus_atk == 0 ? 0 : ally_bonus_atk
    ally.bonus_times_atk += ally_bonus_atkP == 0 ? 0 : ally_bonus_atkP/100
    ally.bonus_sum_acc += ally_bonus_acc == 0 ? 0 : ally_bonus_acc
    ally.bonus_times_acc += ally_bonus_accP == 0 ? 0 : ally_bonus_accP/100
    ally.bonus_sum_crate += ally_bonus_crate == 0 ? 0 : ally_bonus_crate
    ally.bonus_times_crate += ally_bonus_crateP == 0 ? 0 : ally_bonus_crateP/100
    ally.bonus_sum_cdmg += ally_bonus_cdmg == 0 ? 0 : ally_bonus_cdmg
    ally.bonus_times_cdmg += ally_bonus_cdmgP == 0 ? 0 : ally_bonus_cdmgP/100


    ally.bonus_cal()

}

const input = document.querySelector('#ally_input');
input.addEventListener('click', () => {
    ally_cal()
});



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
        ally_cal()
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
        enemy_bonus_cres = parseInt(document.getElementById("enemy_bonus_cres").value)
        enemy_bonus_cresP = parseFloat(document.getElementById("enemy_bonus_cresP").value)
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

        enemy.bonus_bond(enemy_name,enemy_bond, stu_bond)
        enemy.bonus_equip(enemy.equip1, enemy_eq1, equipList)
        enemy.bonus_equip(enemy.equip2, enemy_eq2, equipList)
        enemy.bonus_equip(enemy.equip3, enemy_eq3, equipList)

        enemy.bonus_sum_hp += enemy_bonus_hp == 0 ? 0 : enemy_bonus_hp
        enemy.bonus_times_hp += enemy_bonus_hpP == 0 ? 0 : enemy_bonus_hpP/100
        enemy.bonus_sum_def += enemy_bonus_def == 0 ? 0 : enemy_bonus_def
        enemy.bonus_times_def += enemy_bonus_defP == 0 ? 0 : enemy_bonus_defP/100
        enemy.bonus_sum_evade += enemy_bonus_evade == 0 ? 0 : enemy_bonus_evade
        enemy.bonus_times_evade += enemy_bonus_evadeP == 0 ? 0 : enemy_bonus_evadeP/100
        enemy.bonus_sum_cres += enemy_bonus_cres == 0 ? 0 : enemy_bonus_cres
        enemy.bonus_times_cres += enemy_bonus_cresP == 0 ? 0 : enemy_bonus_cresP/100
        enemy.bonus_sum_cdmres += enemy_bonus_cdmres == 0 ? 0 : enemy_bonus_cdmres
        enemy.bonus_times_cdmres += enemy_bonus_cdmresP == 0 ? 0 : enemy_bonus_cdmresP/100

        enemy.bonus_cal()
        
        switch (stu_detail[ally.stuNum][3]) {
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
        let final_dmg = dmg_cal(ally.atk, skill, enemy.def, type, region, devision, ally.stab, false, ally.cdmg, ally.bonus_sum_cdmg, ally.bonus_times_cdmg, enemy.cdmres, 0,2)
        let final_crt = dmg_cal(ally.atk, skill, enemy.def, type, region, devision, ally.stab, true, ally.cdmg, ally.bonus_sum_cdmg, ally.bonus_times_cdmg, enemy.cdmres, 0.2)

        document.getElementById("hit_chance").innerHTML = (hit_chance(enemy.evade, ally.acc)*100).toFixed(2)
        document.getElementById("crt_chance").innerHTML = (crit_chance(ally.crate, enemy.cres)*100).toFixed(2)
    
        document.getElementById("crt_dm").innerHTML = parseFloat(((ally.cdmg*100-enemy.cdmres )*(1+ally.bonus_times_cdmg)/10000).toFixed(2))
        document.getElementById("df").innerHTML = parseFloat((1666.66/(1666.66+enemy.def)).toFixed(2))

        document.getElementById("atk_flr").innerHTML = parseInt(final_dmg[1])
        document.getElementById("atk_ceil").innerHTML = parseInt(final_dmg[0])
        document.getElementById("atk_avg").innerHTML = parseInt((final_dmg[0]+final_dmg[1])/2)
        
        document.getElementById("crt_flr").innerHTML = parseInt(final_crt[1])
        document.getElementById("crt_ceil").innerHTML = parseInt(final_crt[0])
        document.getElementById("crt_avg").innerHTML = parseInt((final_crt[0]+final_crt[1])/2)

        document.getElementById("f_atk_flr").innerHTML = parseInt(final_dmg[1])*atk_times
        document.getElementById("f_atk_ceil").innerHTML = parseInt(final_crt[0])*atk_times
        document.getElementById("f_atk_avg").innerHTML = parseInt(average((final_dmg[0]+final_dmg[1])/2,(final_crt[0]+final_crt[1])/2,crit_chance(ally.crate, enemy.cres),atk_times==1?devision:atk_times))

        document.getElementById("f_enemy_hp").innerHTML = parseInt(enemy.hp)
        document.getElementById("f_enemy_def").innerHTML = parseInt(enemy.def)
        document.getElementById("f_enemy_crtres").innerHTML = parseInt(enemy.cres)
        document.getElementById("f_enemy_crtdmgres").innerHTML = parseInt(enemy.cdmres)
        document.getElementById("f_enemy_type").innerHTML = stu_detail[enemy.stuNum][4]
    }
)

const boss_input = document.querySelector("#boss_input")
    boss_input.addEventListener('click', () => {
        ally_cal()
        let boss_name = "" ? "비나" : document.getElementById("boss_name").value
        let boss_num = checkfor(boss_list, boss_name)[0]
        let boss_lev = parseInt(document.getElementById("boss_lev").value)

        let boss_bonus_def = parseFloat(document.getElementById("boss_bonus_def").value)
        let boss_bonus_defP = parseFloat(document.getElementById("boss_bonus_defP").value/100)
        let boss_bonus_cres = parseFloat(document.getElementById("boss_bonus_cres").value)
        let boss_bonus_cresP = parseFloat(document.getElementById("boss_bonus_cresP").value/100)
        let boss_bonus_cdmres = parseFloat(document.getElementById("boss_bonus_cdmres").value)
        let boss_bonus_cdmresP = parseFloat(document.getElementById("boss_bonus_cdmresP").value/100)

        let boss_hp = boss_list[boss_num+boss_lev][1]
        let boss_atk = boss_list[boss_num+boss_lev][2]
        let boss_def = boss_list[boss_num+boss_lev][3]
        let boss_cres = boss_list[boss_num+boss_lev][4]
        let boss_cdmres = boss_list[boss_num+boss_lev][5]

        let boss = new c_boss(boss_name, boss_hp, boss_atk, boss_def, boss_cres, boss_cdmres)

        boss.bonus_sum_def += isNaN(boss_bonus_def)? 0 : boss_bonus_def
        boss.bonus_times_def += isNaN(boss_bonus_defP)? 0 : boss_bonus_defP
        boss.bonus_sum_cres=0
        boss.bonus_times_cres=0
        boss.bonus_times_cdmres=0
        boss.bonus_sum_cdmres=0
        boss.bonus_sum_cres += isNaN(boss_bonus_cres)? 0 : boss_bonus_cres
        boss.bonus_times_cres += isNaN(boss_bonus_cresP)? 0 : boss_bonus_cresP
        boss.bonus_sum_cdmres += isNaN(boss_bonus_cdmres)? 0 : boss_bonus_cdmres
        boss.bonus_times_cdmres += isNaN(boss_bonus_cdmresP)? 0 : boss_bonus_cdmresP
        
        boss.bonus_cal()

        skill = parseFloat(document.getElementById("skill_dmg").value)

        atk_times = 1
        devision = 1
        if (document.getElementById("dev").value=="번") {
            atk_times = parseInt(document.getElementById("attack_times").value)
        } else {devision = parseInt(document.getElementById("attack_times").value); atk_times = parseInt(document.getElementById("attack_times").value)}
        region = parseFloat(document.getElementById("region").value)

        switch (stu_detail[ally.stuNum][3]) {
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

        let final_dmg = dmg_cal(ally.atk, skill, boss.def, type, region, devision, ally.stab, false, ally.cdmg, ally.bonus_sum_cdmg, ally.bonus_times_cdmg, boss.cdmres, 0.75)
        let final_crt = dmg_cal(ally.atk, skill, boss.def, type, region, devision, ally.stab, true, ally.cdmg, ally.bonus_sum_cdmg, ally.bonus_times_cdmg, boss.cdmres, 0.75)

        document.getElementById("hit_chance").innerHTML = (hit_chance(boss.evade, ally.acc)*100).toFixed(2)
        document.getElementById("crt_chance").innerHTML = (crit_chance(ally.crate, boss.cres)*100).toFixed(2)

        document.getElementById("crt_dm").innerHTML = parseFloat(((ally.cdmg*100+ally.bonus_sum_cdmg-boss.cdmres)*(1+ally.bonus_times_cdmg)/10000).toFixed(2))
        document.getElementById("df").innerHTML = parseFloat((1666.66/(1666.66+boss.def)).toFixed(2))
        
        document.getElementById("atk_flr").innerHTML = parseInt(final_dmg[1])
        document.getElementById("atk_ceil").innerHTML = parseInt(final_dmg[0])
        document.getElementById("atk_avg").innerHTML = parseInt((final_dmg[0]+final_dmg[1])/2)
        
        document.getElementById("crt_flr").innerHTML = parseInt(final_crt[1])
        document.getElementById("crt_ceil").innerHTML = parseInt(final_crt[0])
        document.getElementById("crt_avg").innerHTML = parseInt((final_crt[0]+final_crt[1])/2)

        document.getElementById("f_atk_flr").innerHTML = parseInt(final_dmg[1])*atk_times
        document.getElementById("f_atk_ceil").innerHTML = parseInt(final_crt[0])*atk_times
        document.getElementById("f_atk_avg").innerHTML = parseInt(average((final_dmg[0]+final_dmg[1])/2,(final_crt[0]+final_crt[1])/2,crit_chance(ally.crate, boss.cres),atk_times==1?devision:atk_times))

        document.getElementById("f_enemy_hp").innerHTML = parseInt(boss.hp)
        document.getElementById("f_enemy_def").innerHTML = parseInt(boss.def)
        document.getElementById("f_enemy_crtres").innerHTML = parseInt(boss.cres)
        document.getElementById("f_enemy_crtdmgres").innerHTML = parseInt(boss.cdmres)
        document.getElementById("f_enemy_type").innerHTML = boss_list[boss_num+boss_lev][6]

    }
)



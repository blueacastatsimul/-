export function crit_chance(input_crt, input_cres) {       //크리 확률 계산 함수
    var crt = (input_crt-input_cres)/(input_crt-input_cres+666.66) < 800 ? (input_crt-input_cres)/(input_crt-input_cres+666.66) : 800
    crt = crt < 0 ? 0 : crt
    return crt
}

export function dmg_cal(atk, skill, def, type, region, devide, stab, iscrt, cdmg, bonus_cdmg, bonus_cdmgP, cdmres)  {
    var df = (1666.66/(1666.66+def))

    cdmres = cdmres > 8000 ? 8000 : cdmres

    let dmg_ceil = atk * skill/100 * type * region * df / devide
    let dmg_floor = (stab/(stab + 997) + 0.2) * dmg_ceil

    if (!iscrt) {
    return [dmg_ceil, dmg_floor]
    } else {
        dmg_ceil = dmg_ceil *(cdmg*100+bonus_cdmg-cdmres )*(1+bonus_cdmgP)/10000
        dmg_floor = (stab/(stab + 997) + 0.2) * dmg_ceil
        return [dmg_ceil, dmg_floor]
    }
}

export function hit_chance(evade, acc) {
    const hit = evade > acc ? 700/(evade-acc+700) : 1
    return hit
}

function factorial(num){
    var counter = 1;
    for (var i = 2; i <= num; i++)
        counter = counter * i;
    return counter;
}

export function average(normal_avg, crt_avg, p, n) {
    var q = 1 - p
    var ans = 0
    for ( var r = 0; r <= n; r ++){
        // for 0<=r<=n  nCr * p^r * q^(n-r) *( crt*r + normal*(n-r))
        ans += factorial(n)/(factorial(r)*factorial(n-r))*(p**r)*(q**(n-r))*(crt_avg*r+normal_avg*(n-r))
    }
    return ans
}

export function checkfor(list, target) {
    let i = 0
    let check = false
    for (i=0;i<list.length; i++) {
        if (list[i].includes(target)){
            check = true
            return [i,check]
        }
    }
    return[0,check]
    

}

export function checkforstudent(stuList, stu_target) {
    var a = checkfor(stuList, stu_target)
    if (!a[1]) {
        alert("해당하는 학생을 찾을 수 없습니다!\n학생 이름 끝에 띄어쓰기가 입력 되지는 않았는지 확인해 주시기 바랍니다!\n다른 의상 학생의 경우 이름 뒤에 띄어쓰기 없이 괄호 안에 의상 이름을 넣어주시기 바랍니다\nex)시로코(라이딩)")
        throw "해당하는 학생을 찾을 수 없습니다! 입력된 이름 : "+stu_target
    } else {return a[0]}
}


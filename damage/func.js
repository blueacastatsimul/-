export function crit_chance(input_crt, input_cres) {   
    var crt = (input_crt-input_cres)/(input_crt-input_cres+666.66) < 800 ? (input_crt-input_cres)/(input_crt-input_cres+666.66) : 800
    crt = crt < 0 ? 0 : crt
    return crt
}

export function dmg_cal(atk, skill, def, type, region, devide, stab, iscrt, cdmg, bonus_cdmg, bonus_cdmgP, cdmres,t)  {
    var df = 1/(1+0.6*def/1000)

    cdmres = cdmres > 8000 ? 8000 : cdmres

    let dmg_ceil = atk * skill/100 * type * region * df / devide
    let dmg_floor = (stab/(stab + 1000) + t) * dmg_ceil

    if (!iscrt) {
    return [dmg_ceil, dmg_floor]
    } else {
        dmg_ceil = dmg_ceil *(cdmg*100+bonus_cdmg-cdmres )*(1+bonus_cdmgP)/10000
        dmg_floor = (stab/(stab + 997) + 0.2) * dmg_ceil
        return [dmg_ceil, dmg_floor]
    }
}

export function hit_chance(evade, acc) {
    const hit = evade > acc ? 666.66/(evade-acc+666.66) : 1
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
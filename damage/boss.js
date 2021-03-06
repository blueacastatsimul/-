export class c_boss {
    constructor(name, hp, atk, def, cres, cdmres){
        this.name = name                  //이름
        this.hp = hp
        this.atk = atk
        this.def = def
        this.cres = cres
        this.cdmres = cdmres
        this.evade = 0
        
        this.bonus_times_atk = 0        // % 보너스 공격
        this.bonus_times_def = 0
        this.bonus_times_evade = 0
        this.bonus_times_cres = 0
        this.bonus_times_cdmres = 0
        
        this.bonus_sum_atk = 0          // + 보너스 공격
        this.bonus_sum_def = 0
        this.bonus_sum_evade = 0
        this.bonus_sum_cres = 0
        this.bonus_sum_cdmres = 0
    }

    bonus_cal(){
        this.def = (this.def+this.bonus_sum_def)*(1+this.bonus_times_def)
        this.cres = (this.cres+this.bonus_sum_cres)*(1+this.bonus_times_cres)
        this.cdmres = (this.cdmres+this.bonus_sum_cdmres)*(1+this.bonus_times_cdmres)
    }
}

// 이름, 체력, 공격력, 방어력, 치명 저항, 치명 데미지 저항
export const boss_list = [
    ['비나', 300000.0, 1500.0, 1700.0, 20.0, 5000.0, "중장갑"],
    ['', 800000.0, 1800.0, 2000.0, 20.0, 5000.0, "중장갑"],
    ['', 1100000.0, 3000.0, 2500.0, 20.0, 5000.0, "중장갑"],
    ['', 2000000.0, 4000.0, 3100.0, 20.0, 5000.0,"중장갑"],
    ['', 6000000.0, 8000.0, 3900.0, 20.0, 5000.0, "중장갑"],
    ['', 7000000.0, 20000.0, 5000.0, 20.0, 10000.0, "중장갑"],
    ['시로 & 쿠로', 600000.0, 600.0, 700.0, 100.0, 5000.0, "특수장갑"],
    ['', 1150000.0, 950.0, 700.0, 100.0, 5000.0, "특수장갑"],
    ['', 1410000.0, 1400.0, 700.0, 100.0, 5000.0, "특수장갑"],
    ['', 2530000.0, 1600.0, 700.0, 100.0, 5000.0, "특수장갑"],
    ['', 10500000.0, 3700.0, 700.0, 100.0, 5000.0, "특수장갑"],
    ['', 20000000.0, 5500.0, 700.0, 100.0, 10000.0, "특수장갑"],
    ['예로니무스', 400000.0, 500.0, 800.0, 100.0, 5000.0, "경장갑"],
    ['', 900000.0, 900.0, 1200.0, 100.0, 5000.0, "경장갑"],
    ['', 1350000.0, 1400.0, 1500.0, 100.0, 5000.0, "경장갑"],
    ['', 2500000.0, 2300.0, 2000.0, 100.0, 5000.0, "경장갑"],
    ['', 6000000.0, 4650.0, 2900.0, 100.0, 5000.0, "경장갑"],
    ['', 0.0, 0.0, 0.0, 0.0, 0.0, "경장갑"],
    ['카이텐', 320000.0, 600.0, 420.0, 20.0, 5000.0, "경장갑"],
    ['', 700000.0, 1500.0, 420.0, 20.0, 5000.0, "경장갑"],
    ['', 1500000.0, 2000.0, 420.0, 20.0, 5000.0, "경장갑"],
    ['', 3000000.0, 2500.0, 420.0, 20.0, 5000.0, "경장갑"],
    ['', 12500000.0, 3500.0, 420.0, 20.0, 5000.0, "경장갑"],
    ['', 18000000.0, 8750.0, 420.0, 20.0, 10000.0, "경장갑"],
    ['페로로질라', 380000.0, 400.0, 4000.0, 100.0, 5000.0, "특수장갑"],
    ['', 1100000.0, 650.0, 4000.0, 100.0, 5000.0, "특수장갑"],
    ['', 1600000.0, 900.0, 4000.0, 100.0, 5000.0, "특수장갑"],
    ['', 2500000.0, 1400.0, 4000.0, 100.0, 5000.0, "특수장갑"],
    ['', 8000000.0, 6000.0, 4000.0, 100.0, 5000.0, "특수장갑"],
    ['', 22000000.0, 10800.0, 4000.0, 100.0, 10000.0, "특수장갑"],
    ['헤세드', 80000.0, 10.0, 100.0, 20.0, 5000.0, "중장갑"],
    ['', 311000.0, 10.0, 100.0, 20.0, 5000.0, "중장갑"],
    ['', 504000.0, 10.0, 100.0, 20.0, 5000.0, "중장갑"],
    ['', 780000.0, 10.0, 100.0, 20.0, 5000.0, "중장갑"],
    ['', 3400000.0, 10.0, 100.0, 20.0, 5000.0, "중장갑"],
    ['', 6400000.0, 10.0, 100.0, 20.0, 5000.0, "중장갑"],
    ['호드', 80000.0, 700.0, 100.0, 500.0, 5000.0, "중장갑"],
    ['', 125000.0, 1050.0, 100.0, 500.0, 5000.0, "중장갑"],
    ['', 300000.0, 1575.0, 100.0, 500.0, 5000.0, "중장갑"],
    ['', 480000.0, 2363.0, 100.0, 500.0, 5000.0, "중장갑"],
    ['', 1600000.0, 3300.0, 100.0, 500.0, 5000.0, "중장갑"],
    ['', 2800000.0, 6435.0, 100.0, 500.0, 5000.0, "중장갑"]
    ]
    
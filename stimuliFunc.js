//------This script generates a random order of stimuli with the rules of the predefined methods-----
const stimulus_set = []

var relay = 0

const fp_con_list = [
    ["FFFFF", "no_conflict", "1"],
    ["PPPPP", "no_conflict", "9"]
]
const fp_inc_list = [
    ["FPPPF", "low_conflict", "9"],
    ["PFFFP", "low_conflict", "1"],
    ["FFPFF", "high_conflict", "9"],
    ["PPFPP", "high_conflict", "1"]
]
const hn_con_list = [
    ["HHHHH", "no_conflict", "2"],
    ["NNNNN", "no_conflict", "8"]
]
const hn_inc_list = [
    ["HNNNH", "low_conflict", "8"],
    ["NHHHN", "low_conflict", "2"],
    ["HHNHH", "high_conflict", "8"],
    ["NNHNN", "high_conflict", "2"]
]

const fp_group = [fp_con_list, fp_inc_list]
const hn_group = [hn_con_list, hn_inc_list]

function stimulus_finder(group) {
    congruency = Math.floor(Math.random() * group.length) //randomly choosing from congruent or incongruent stimuli (50-50%)
    stimulus = Math.floor(Math.random() * group.length) // randomly choosing a stimulus from the list (25% low conflict, 25% high conflict, 50% no conflict)
    stimulus_set.push(group[congruency][stimulus])
}

function group_relay() { // kindergarden way to switch between fp and hn groups

    if (relay === 0) {

        stimulus_finder(fp_group)

        relay = 1
    } else {
        stimulus_finder(hn_group)

        relay = 0
    }

}

function set_factory(total) {
    for (var i = 0; i <= total; i += 1) {
        group_relay()
    }
}

set_factory(97)

export {stimulus_set, set_factory}
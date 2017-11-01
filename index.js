var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing() {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  } else if (katzDeliLine.length > 1) {
    return (`Currently serving ${katzDeliLine.unshift[0]}.`)
    katzDeliLine.unshift()
  }
}

function currentLine(katzDeliLine) {
  newArray = []
  for ( let i = 0; i < katzDeliLine.length; i++) {
    newArray.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
    return (`The line is currently: ${newArray}.`)
}

let doneWithBucketList = false
let yesNo = ""
let bucketList = []

while (doneWithBucketList == false) {
  yesNo = prompt("Do you want to add to your bucket list? Yes or No")
  if (yesNo == "Yes") {
    doneWithBucketList = false
    let newItem = prompt("What would you like to add to your bucket list?")
    bucketList.push(newItem)
    console.log(newItem)
 } else
    doneWithBucketList = true
  }


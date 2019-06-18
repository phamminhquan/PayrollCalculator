function calculate(){
	var time_dif_id = ["mon-dif", "tue-dif", "wed-dif", "thu-dif", "fri-dif", "sat-dif"];
	var in_time_1 = [new Date("1970-01-01T" + document.getElementById("mon-in-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("tue-in-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("wed-in-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("thu-in-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("fri-in-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("sat-in-1").value + "Z")];
					
	var in_time_2 = [new Date("1970-01-01T" + document.getElementById("mon-in-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("tue-in-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("wed-in-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("thu-in-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("fri-in-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("sat-in-2").value + "Z")];
	
	var out_time_1 = [new Date("1970-01-01T" + document.getElementById("mon-out-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("tue-out-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("wed-out-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("thu-out-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("fri-out-1").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("sat-out-1").value + "Z")];
	
	var out_time_2 = [new Date("1970-01-01T" + document.getElementById("mon-out-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("tue-out-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("wed-out-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("thu-out-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("fri-out-2").value + "Z"),
					new Date("1970-01-01T" + document.getElementById("sat-out-2").value + "Z")];
	
	var rate = parseFloat(document.getElementById("rate").value);
	var total_dif = 0;
	
	var i;
	for (i=0;i<in_time_1.length;i++) {
		try {
			if (in_time_1[i] >= out_time_1[i]) {
				alert("In time is before out time");
			} else {
				var dif_1 = new Date(out_time_1[i]-in_time_1[i]);
			}
			if (in_time_2[i] >= out_time_2[i]) {
				alert("In time is before out time");
			} else {
				var dif_2 = new Date(out_time_2[i]-in_time_2[i]);
			}
			document.getElementById(time_dif_id[i]).innerHTML=ms_to_time(dif_1.getTime() + dif_2.getTime());
			total_dif += (out_time_1[i]-in_time_1[i]);
			total_dif += (out_time_2[i]-in_time_2[i]);
		} catch(err) {
			alert(err.message);
		}
	}
	document.getElementById("total-dif").innerHTML=ms_to_time(total_dif);
	var total_wage = rate * (total_dif / (1000 * 3600));
	document.getElementById("total-wage").innerHTML=total_wage.toString();
}

function ms_to_time(duration) {
	var minutes = Math.floor((duration / (1000 * 60)) % 60),
		hours = Math.floor(duration / (1000 * 60 * 60));

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;

	return hours + ":" + minutes;
}


function reset() {
	document.getElementById("rate").value = "0";
	document.getElementById("mon-in-1").value = "07:00";
	document.getElementById("mon-out-1").value = "12:00";
	document.getElementById("mon-in-2").value = "13:00";
	document.getElementById("mon-out-2").value = "17:00";
	document.getElementById("tue-in-1").value = "07:00";
	document.getElementById("tue-out-1").value = "12:00";
	document.getElementById("tue-in-2").value = "13:00";
	document.getElementById("tue-out-2").value = "17:00";
	document.getElementById("wed-in-1").value = "07:00";
	document.getElementById("wed-out-1").value = "12:00";
	document.getElementById("wed-in-2").value = "13:00";
	document.getElementById("wed-out-2").value = "17:00";
	document.getElementById("thu-in-1").value = "07:00";
	document.getElementById("thu-out-1").value = "12:00";
	document.getElementById("thu-in-2").value = "13:00";
	document.getElementById("thu-out-2").value = "17:00";
	document.getElementById("fri-in-1").value = "07:00";
	document.getElementById("fri-out-1").value = "12:00";
	document.getElementById("fri-in-2").value = "13:00";
	document.getElementById("fri-out-2").value = "17:00";
	document.getElementById("sat-in-1").value = "07:00";
	document.getElementById("sat-out-1").value = "12:00";
	document.getElementById("sat-in-2").value = "13:00";
	document.getElementById("sat-out-2").value = "17:00";
}
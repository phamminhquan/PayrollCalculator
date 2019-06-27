function calculate(){
	var time_dif_id = ["mon-dif", "tue-dif", "wed-dif", "thu-dif", "fri-dif", "sat-dif"];
	var in_1_id = ["mon-in-1", "tue-in-1", "wed-in-1", "thu-in-1", "fri-in-1", "sat-in-1"];
	var in_2_id = ["mon-in-2", "tue-in-2", "wed-in-2", "thu-in-2", "fri-in-2", "sat-in-2"];
	var out_1_id = ["mon-out-1", "tue-out-1", "wed-out-1", "thu-out-1", "fri-out-1", "sat-out-1"];
	var out_2_id = ["mon-out-2", "tue-out-2", "wed-out-2", "thu-out-2", "fri-out-2", "sat-out-2"];
					
	var total_dif = 0;
	
	var i;
	for (i=0;i<in_1_id.length;i++) {
		try {
			var in_time_1_val = document.getElementById(in_1_id[i]).value;
			var out_time_1_val = document.getElementById(out_1_id[i]).value;
			var in_time_2_val = document.getElementById(in_2_id[i]).value;
			var out_time_2_val = document.getElementById(out_2_id[i]).value;
			
			if (in_time_1_val !== "" && out_time_1_val !== "") {
				var in_time_1 = new Date("1970-01-01T" + document.getElementById(in_1_id[i]).value + "Z");
				var out_time_1 = new Date("1970-01-01T" + document.getElementById(out_1_id[i]).value + "Z");
				if (in_time_1 > out_time_1) {
					alert("In time is before out time");
				} else {
					var dif_1 = new Date(out_time_1-in_time_1);
				}
				total_dif += (out_time_1-in_time_1);
			} else {
				document.getElementById(time_dif_id[i]).innerHTML = "00:00";
				var dif_1 = new Date("1970-01-01T" + "00:00" + "Z");
			}
			
			if (in_time_2_val !== "" && out_time_2_val !== "") {
				var in_time_2 = new Date("1970-01-01T" + document.getElementById(in_2_id[i]).value + "Z");
				var out_time_2 = new Date("1970-01-01T" + document.getElementById(out_2_id[i]).value + "Z");
				if (in_time_2 > out_time_2) {
					alert("In time is before out time");
				} else {
					var dif_2 = new Date(out_time_2-in_time_2);
				}
				total_dif += (out_time_2-in_time_2);
			} else {
				document.getElementById(time_dif_id[i]).innerHTML = "00:00";
				var dif_2 = new Date("1970-01-01T" + "00:00" + "Z");
			}
			document.getElementById(time_dif_id[i]).innerHTML=ms_to_time(dif_1.getTime() + dif_2.getTime());
			
		} catch(err) {
			alert(err.message);
		}
	}
	document.getElementById("total-dif").innerHTML=ms_to_time(total_dif);
}

function ms_to_time(duration) {
	var minutes = Math.floor((duration / (1000 * 60)) % 60),
		hours = Math.floor(duration / (1000 * 60 * 60));

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;

	return hours + ":" + minutes;
}


function reset() {
	document.getElementById("mon-in-1").value = "";
	document.getElementById("mon-out-1").value = "";
	document.getElementById("mon-in-2").value = "";
	document.getElementById("mon-out-2").value = "";
	document.getElementById("tue-in-1").value = "";
	document.getElementById("tue-out-1").value = "";
	document.getElementById("tue-in-2").value = "";
	document.getElementById("tue-out-2").value = "";
	document.getElementById("wed-in-1").value = "";
	document.getElementById("wed-out-1").value = "";
	document.getElementById("wed-in-2").value = "";
	document.getElementById("wed-out-2").value = "";
	document.getElementById("thu-in-1").value = "";
	document.getElementById("thu-out-1").value = "";
	document.getElementById("thu-in-2").value = "";
	document.getElementById("thu-out-2").value = "";
	document.getElementById("fri-in-1").value = "";
	document.getElementById("fri-out-1").value = "";
	document.getElementById("fri-in-2").value = "";
	document.getElementById("fri-out-2").value = "";
	document.getElementById("sat-in-1").value = "";
	document.getElementById("sat-out-1").value = "";
	document.getElementById("sat-in-2").value = "";
	document.getElementById("sat-out-2").value = "";
}

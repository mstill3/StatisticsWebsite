
function graph()
{

  var d = document.getElementById('data').value;
  d = d.replace(/\s+/g, '');
  var vals = d.split(",");
  // alert(vals);

  var nums = [];
  for (var i = 1; i <= vals.length; i++)
      nums.push(i);
  // alert(nums);


  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nums,
      datasets: [
        { 
            data: vals,
            label: "data",
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // fill: false
        }
      ]
    }
  });
}
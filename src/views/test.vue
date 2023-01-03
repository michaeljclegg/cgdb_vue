<script lang="ts">
const saveFile = () => {
  const data = JSON.stringify(arr);
  window.localStorage.setItem("arr", data);
  console.log(JSON.parse(window.localStorage.getItem("arr")));
};
</script>

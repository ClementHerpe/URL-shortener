<template>
  <div>
    <h1>{{ msg }}</h1>
    <p> Un projet cours pour apprendre les bases de Vue, pratiquer Node et s'entrainer à déployer un site ! <span style='font-size:30px;'>&#128513;</span> </p>
    <form>
      <input v-model="url" name="url" id="url" placeholder="Le lien à simplifer">
      <input v-model="slug" name="slug" id="slug" placeholder="Raccourci souhaité">
      <div id="create--url--button" @click="createUrl()" class="ui animated button" tabindex="0">
        <div class="visible content">Générer mon lien</div>
        <div class="hidden content">
          <i class="right arrow icon"></i>
        </div>
      </div>
    </form>
    <div id="result">{{ created }}</div>
    <button id="copy--url--button" class="ui toggle button invisible" @click="copyLink(`localhost:3000/${this.slug}`)"> Copier </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
    url:'http://',
    slug:'',
    created:'',
    }
  },
  methods: {
    async createUrl() {
      console.log(this.url, this.slug);
      await fetch('http://3.83.108.186:3000/url', {
      // await fetch('http://localhost:3000/url', {
        method: 'POST',
        mode : 'no-cors',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify ({
          url: this.url,
          slug: this.slug,
        })
      })
      .then((res) => {
        if(res.status === 200) {
          this.created = `Lien crée et disponible : localhost:3000/${this.slug}`
          const button = document.getElementById("copy--url--button");
          button.classList.remove("invisible");
        }
        else {
          console.log(res);
          this.created = 'Oups, veuillez réessayer';
        }
      });
    },
    copyLink (text) {
      const button = document.getElementById("copy--url--button");
      button.classList.add("success");
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input {
  width: 50%;
  margin: 0.5em auto;
  padding: 0.8em;
  font-size: 1.2em;
  font-weight: bold;
  color: #41B883;
  background-color: #2c3e50;
  border: 2px solid #2c3e50;
  border-radius: 30px;
  text-align: center;
}

input::placeholder {
  color: #41B883;
}

input:focus {
  outline: none;
  border: 2px solid #41B883;
}

#create--url--button {
  width: 200px;
  background-color: #41B883;
  margin: 1em auto;
  font-size: 1.2em;
}

h1 {
  color: white;
}

p {
  color: white;
}

#copy--url--button {
  margin-top: 1em;
}

.invisible {
  display: none;
}

.ui .button .success {
  background-color: #41B883;
}

</style>

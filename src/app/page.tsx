import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <section className="flex w-full justify-center items-center py-20 px-5 bg-gray-300">
    <div className='lg:justify-between justify-center w-full items-center flex flex-col lg:max-w-6xl'>
      <h3 className="lg:text-xl font-semibold text-xl text-red-700 text-center pb-10 uppercase">Blog</h3>

      <div className="md:flex grid gap-2 items-start lg:items-center lg:justify-between justify-center w-full">

        <div className="relative w-72 lg:w-full group max-w-xs gap-4 grid">
          <div className="relative group">
            <img src="/Blog-img1.png" alt="Photo" className="w-full rounded" />
            <span
              className="absolute justify-center items-center left-10 lg:block hidden w-60 h-0 transition-all bg-red-700 opacity-70 group-hover:h-60 top-1/2 group-hover:rounded-lg group-hover:top-10 duration-300 ease-in-out"></span>
            <div
              className="absolute h-60 w-60 lg:flex hidden justify-center top-10 left-10 items-center opacity-0 group-hover:opacity-100">
              <div className="flex-row text-center">
                <a href="blog.html">
                  <button className="text-white text-sm">
                    Continuar lendo...
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-red-700 py-2 font-medium">
            COMO USUFRUIR DE OBJETOS DECORATIVOS NA SALA DE ESTAR
          </h2>
          <p className="text-black font-medium text-sm">
            Objetos de decoração pode ser aliados na decoração da sua sala de estar. Aprenda a usá-los
            corretamente neste artigo!
          </p>
        </div>

        <div className="relative w-72 lg:w-full group max-w-xs gap-4 grid">
          <div className="relative group">
            <img src="/Blog-img2.png" alt="Photo" className="w-full rounded" />
            <span
              className="absolute justify-center items-center left-10 lg:block hidden w-60 h-0 transition-all bg-red-700 opacity-70 group-hover:h-60 top-1/2 group-hover:rounded-lg group-hover:top-10 duration-300 ease-in-out"></span>
            <div
              className="absolute h-60 w-60 lg:flex hidden justify-center top-10 left-10 items-center opacity-0 group-hover:opacity-100">
              <div className="flex-row text-center">
                <a href="blog.html">
                  <button className="text-white text-sm">
                    Continuar lendo...
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-red-700 py-2 font-medium">
            3 VANTAGENS DE MORAR EM PINHEIROS
          </h2>
          <p className="text-black font-medium text-sm">
            O bairro Pinheiros é um dos mais antigos da capital paulista e também é um bairro completo. Com
            opções de lazer para toda a família e imóveis de alto padrão!
          </p>
        </div>

        <div className="relative w-72 lg:w-full group max-w-xs gap-4 grid">
          <div className="relative group">
            <img src="/Blog-img3.png" alt="Photo" className="w-full rounded" />
            <span
              className="absolute justify-center items-center left-10 lg:block hidden w-60 h-0 transition-all bg-red-700 opacity-70 group-hover:h-60 top-1/2 group-hover:rounded-lg group-hover:top-10 duration-300 ease-in-out"></span>
            <div
              className="absolute h-60 w-60 lg:flex hidden justify-center top-10 left-10 items-center opacity-0 group-hover:opacity-100">
              <div className="flex-row text-center">
                <a href="blog.html">
                  <button className="text-white text-sm">
                    Continuar lendo...
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-red-700 py-2 font-medium">
            ZIMMERMANN FECHA PARCERIA COM MARCA LÍDER EM MÓVEIS PLANEJADOS!
          </h2>
          <p className="text-black font-medium text-sm">
            Plus Design, marca do grupo Italínea, dará aos clientes da Zimmermann um desconto exclusivo em
            seus projetos de móveis planejados.
          </p>
        </div>
      </div>

      <button
        className="flex my-10 hover:bg-red-700 border hover:border-transparent border-black rounded-full text-black hover:text-white font-medium hover:px-6 py-2 px-3 transition-all duration-300 ease-in-out">
        <a href="">
          Mais notícias
        </a>
      </button>

    </div>
  </section>
    </main>
  )
}

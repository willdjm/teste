import Image from 'next/image'

export default function Home() {
  
  return (
    <main>


{/* <!-- NAVBARFIXA --> */}
  <div className="w-full">
    {/* <!-- NAVBARFIXA DESKTOP --> */}
    <nav className="fixed bottom-0 z-50 justify-center items-center w-full hidden lg:flex">
      <div className="relative flex items-center justify-center">
        <img className="cursor-pointer" src="/logo-footer.png" width="100%" height="100%" alt="..."/>
        <div className="absolute flex items-center justify-between w-full max-w-6xl">
          <ul className="flex w-full items-center justify-end gap-7">
            <li className="ml-3">
              <a className="flex items-center justify-center gap-1" href="#">
                <p className="text-white uppercase text-base">
                  Perdizes
                </p>
                <i className="fa-brands fa-whatsapp text-white"></i>
                <p className="text-xs text-white">(11) <span className="text-base text-white">99999-0938</span></p>
              </a>
            </li>
            <li className="ml-3">
              <a className="flex items-center justify-center gap-1" href="#">
                <p className="text-white uppercase text-base">
                  Pinheiros
                </p>
                <i className="fa-brands fa-whatsapp text-white"></i>
                <p className="text-xs text-white">(11) <span className="text-base text-white">99939-9934</span></p>
              </a>
            </li>
            <li className="ml-3 font-bold">
              <a className="flex items-center justify-center gap-1" href="#">
                <p className="text-white uppercase text-base">
                  Jardins
                </p>
                <i className="fa-brands fa-whatsapp text-white"></i>
                <p className="text-xs text-white">(11) <span className="text-base text-white">99999-0938</span></p>
              </a>
            </li>
            <li className="ml-3">
              <a className="flex items-center justify-center gap-1" href="#">
                <p className="text-white uppercase text-base">
                  Vila Romana
                </p>
                <i className="fa-brands fa-whatsapp text-white"></i>
                <p className="text-xs text-white">(11) <span className="text-base text-white">93207-3204</span></p>
              </a>
            </li>
          </ul>        
        </div>
      </div>
    </nav>

    {/* <!-- NAVBARFIXA MOBILE --> */}
    <nav className="flex fixed bottom-0 z-50 justify-center items-center w-full md:hidden">
        <a href="index.html">
          <img className="cursor-pointer" src="/logo-barra-mobile.png" width="100%" height="100%" alt="..."/>
        </a>
    </nav>
  </div>

{/* <!-- BUSCA --> */}
  <section className="flex w-full justify-center items-center px-5 py-10">
    <div className='lg:justify-center items-center flex w-full lg:max-w-6xl'>

      {/* <!-- BUSCA COMPUTADOR--> */}
      <div className="md:flex items-center justify-center w-full gap-1 lg:gap-3 hidden">

        <button className="group relative h-16 w-32 overflow-hidden rounded-lg bg-red-600 px-5">
          <div className="absolute inset-0 bg-red-700 h-full transition-all duration-500 ease-out group-hover:h-0"></div>
          <a href="resultadoBusca.html" className="relative text-white">Busca pelo Mapa</a>
        </button>

        <button className="group relative h-16 w-32 overflow-hidden rounded-lg bg-red-600 px-5">
          <div className="absolute inset-0 bg-red-700 h-full transition-all duration-500 ease-out group-hover:h-0"></div>
          <a href="resultadoBusca.html" className="relative text-white">Busca Genérica</a>
        </button>

        <button className="group relative h-16 w-32 overflow-hidden rounded-lg bg-red-600 px-5">
          <div className="absolute inset-0 bg-red-700 h-full transition-all duration-500 ease-out group-hover:h-0"></div>
          <a href="resultadoBusca.html" className="relative text-white">Imóveis com Vídeo</a>
        </button>

        <button className="group relative h-16 w-32 overflow-hidden rounded-lg bg-red-600 px-5">
          <div className="absolute inset-0 bg-red-700 h-full transition-all duration-500 ease-out group-hover:h-0"></div>
          <a href="resultadoBusca.html" className="relative text-white">Índice de imóveis</a>
        </button>

        <input type="text"
          className="max-w-lg border h-16 border-gray-300 text-gray-900 text-sm rounded-lg block lg:w-full p-2.5 drop-shadow-md"
          placeholder="Busque por endereço, bairro, palavra-chave ou Código do imóvel"/>

        <button className="group relative h-16 w-16 overflow-hidden rounded-lg bg-red-600 px-5">
          <div className="absolute inset-0 bg-red-700 h-full transition-all duration-500 ease-out group-hover:h-0"></div>
          <a href="resultadoBusca.html" className="relative text-white">
            <i className="fa-solid fa-magnifying-glass text-2xl"></i>
          </a>
        </button>

      </div>
      {/* <!-- BUSCA MOBILE--> */}
      <div className="grid items-center justify-center w-full gap-2 md:hidden px-2">

        <div className="flex items-center justify-center gap-2 w-full">
          <input type="text"
            className="max-w-xs border h-16 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Busque por endereço, bairro, palavra-chave ou Código do imóvel"/>

          <button type="button"
            className="bg-red-700 font-medium h-16 w-20 rounded-md text-white px-4 flex items-center justify-center justify-items-center">
            <a href="resultadoBusca.html">
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
            </a>
          </button>
        </div>

        <div className="flex items-center justify-between w-full gap-2">
          <button type="button"
            className="bg-red-700 h-16 w-20 text-sm rounded-md text-white lg:px-2 flex items-center justify-center justify-items-center">
            <a href="resultadoBusca.html">
              Busca pelo Mapa
            </a>
          </button>

          <button type="button"
            className="bg-red-700 h-16 w-20 text-sm rounded-md text-white lg:px-2 flex items-center justify-center justify-items-center">
            <a href="resultadoBusca.html">
              Busca Genérica
            </a>
          </button>

          <button type="button"
            className="bg-red-700 h-16 w-20 text-sm rounded-md text-white lg:px-2 px-1 flex items-center justify-center justify-items-center">
            <a href="resultadoBusca.html">
              Imóveis com Vídeo
            </a>
          </button>

          <button type="button"
            className="bg-red-700 h-16 w-20 text-sm rounded-md text-white lg:px-2 flex items-center justify-center justify-items-center">
            <a href="resultadoBusca.html">
              Índice de imóveis
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- SERVIÇOS --> */}
  <section className="flex w-full justify-center items-center py-5 px-5">
    <div className='lg:justify-center items-center grid lg:max-w-6xl'>
      <div className="items-center justify-center grid">
        <h3 className="text-xl text-red-700 text-center py-5 uppercase">Imobiliária de Tradição e
          excelência
        </h3>
        <p className="text-center max-w-4xl">
          Há mais de 25 anos, a Zimmermann atua exclusivamente na intermediação de COMPRA e VENDA de imóveis nas regiões
          Oeste, Sul e Central da cidade de São Paulo, atendendo assim, os bairros mais tradicionais da capital
          paulista.
          Firmando negócios a partir da receptividade, transparência e segurança para encontrar o imóvel certo para seus
          sonhos!
        </p>
        <div className="flex items-center justify-center pt-5">
          <button className="bg-red-700 text-white py-1.5 px-4 rounded-full hover:bg-red-600 hover:font-medium">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- BAIRROS MAIS BUSCADOS --> */}
  <section
    className="flex w-full justify-center items-center py-20 lg:pb-44 pb-96 px-5 lg:bg-[url('/bannerBairros.png')] bg-cover bg-[url('/bannerBairrosMobile.png')]">
    <div className='lg:justify-between justify-center w-full items-center flex lg:max-w-6xl'>

      <div className="items-center lg:justify-between justify-center w-full md:flex md:flex-col grid gap-2">
        <h3 className="lg:text-xl font-semibold text-xl text-white text-center uppercase py-4 lg:py-3">bairros mais buscados
        </h3>

        <div className="md:flex w-full lg:gap-2 gap-5 items-end grid lg:h-36 justify-between">

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-44 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center ">
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
            Alto da Lapa
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-64 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
            Alto de Pinheiros
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-44 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
            Higienópolis
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-60 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
            Jardim América
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-60 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
            Jardim Paulista
          </button>
        </div>

        <div className="md:flex w-full lg:gap-2 gap-5 items-start grid lg:h-36 justify-between">

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-06 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            Perdizes
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-44 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            Pinheiros
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-44 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            Pompéia
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-60 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            Vila Madalena
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
          </button>

          <button type="button"
            className="border border-black lg:hover:border-transparent font-semibold lg:h-24 h-14 lg:hover:h-36 lg:w-64 w-64 rounded-xl uppercase lg:hover:bg-red-800 transition duration-200 ease-linear group lg:hover:text-white text-black flex flex-col gap-5 items-center justify-center justify-items-center">
            Vila Romana
            <a href="" className="items-center justify-center hidden lg:group-hover:block"><i
                className="fa-solid fa-magnifying-glass text-3xl text-white"></i></a>
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- SERVIÇOS --> */}
  <section className="flex w-full justify-center items-center py-20 px-5">
    <div className='lg:justify-between justify-center w-full items-center flex flex-col lg:max-w-6xl'>
      <h3 className="lg:text-xl font-semibold text-xl text-red-700 text-center pb-10 uppercase">Serviços</h3>
      {/* <!-- SERVIÇO1 --> */}
      <div className="md:flex grid gap-2 items-start lg:items-center lg:justify-between justify-center w-full">
        <div className="relative w-72 lg:w-full group max-w-xs gap-4 grid">
          <div className="relative group">
            <img src="/img-service-1.png" alt="Photo" className="w-full rounded" />
            <span
              className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 rounded-lg group-hover:rounded-lg bg-gradient-to-t from-red-700 to-opacity-20 group-hover:opacity-90 group-hover:h-full opacity-90"></span>
            <span
              className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 rounded-lg group-hover:rounded-lg bg-gradient-to-t from-red-700 to-opacity-20 group-hover:opacity-90 group-hover:h-full opacity-90"></span>
            <div
              className="absolute top-0 w-full h-full flex justify-center py-5 items-end opacity-0 group-hover:opacity-100">
              <div className="flex-row text-center">
                <button className="border rounded-full text-white border-white px-4 py-2">
                  <a href="avaliacaoImovel.html">
                    Saiba mais
                  </a>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-center font-semibold relative group-hover:text-red-700">
            AVALIE SEU IMÓVEL
          </h2>
          <p className="text-center">
            Através de inteligência imobiliária, a gente te ajuda a estimar o valor de seu imóvel.
          </p>
        </div>
        {/* <!-- SERVIÇO2 --> */}
        <div className="relative w-72 lg:w-full group max-w-xs gap-4 grid">
          <div className="relative group">
            <img src="/img-service-2.png" alt="Photo" className="w-full rounded" />
            <span
              className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 rounded-lg group-hover:rounded-lg bg-gradient-to-t from-red-700 to-opacity-20 group-hover:opacity-90 group-hover:h-full opacity-90"></span>
            <div
              className="absolute top-0 w-full h-full flex justify-center py-5 items-end opacity-0 group-hover:opacity-100">
              <div className="flex-row text-center">
                <button className="border rounded-full text-white border-white px-4 py-2">
                  <a href="assessoriaFinanciamento.html">
                    Saiba mais
                  </a>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-center font-semibold uppercase relative group-hover:text-red-700">
            Financiamento
          </h2>
          <p className="text-center">
            Assessoria bancária e financeira para oferecer amplo suporte aos clientes.
          </p>
        </div>
        {/* <!-- SERVIÇO3 --> */}
        <div className="relative w-72 lg:w-full group max-w-xs gap-4 grid">
          <div className="relative group">
            <img src="/img-service-3.png" alt="Photo" className="w-full rounded" />
            <span
              className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 rounded-lg group-hover:rounded-lg bg-gradient-to-t from-red-700 to-opacity-20 group-hover:opacity-90 group-hover:h-full opacity-90"></span>
            <div
              className="absolute top-0 w-full h-full flex justify-center py-5 items-end opacity-0 group-hover:opacity-100">
              <div className="flex-row text-center">
                <button className="border rounded-full text-white border-white px-4 py-2">
                  <a href="assessoriaJuridica.html">
                    Saiba mais
                  </a>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-center font-semibold uppercase relative group-hover:text-red-700">
            Assessoria Jurídica
          </h2>
          <p className="text-center text-sm">
            Departamento jurídico com advogados especializados no ramo do direito imobiliário.
          </p>
        </div>
      </div>
    </div>
  </section>

{/* BLOG       */}
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


  {/* <!-- INICIO INSTAGRAM --> */}
  <section className="flex w-full justify-center items-center py-20 px-5">
    <div className='lg:justify-between justify-center w-full items-center flex flex-col lg:max-w-6xl'>

      <h3 className="lg:text-xl text-xl text-red-700 text-center py-10 uppercase">SIGA A Zimmermann</h3>

      <div className="md:flex gap-1">
        <picture>
          <img className="lg:h-64" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
        </picture>
        <picture>
          <img className="lg:h-64" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
        </picture>
        <picture>
          <img className="lg:h-64" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
        </picture>
      </div>

      <div className="flex items-center justify-center pt-10">
        <a href="#!"
          className="lg:hover:bg-fuchsia-500 bg-fuchsia-500 w-14 h-14 lg:bg-transparent flex items-center justify-center group">
          <i className="fa-brands fa-instagram text-3xl lg:text-gray-300 text-white group-hover:lg:text-white"></i>
        </a>

        <a href="#!"
          className="lg:hover:bg-blue-500 bg-blue-500 w-14 h-14 lg:bg-transparent flex items-center justify-center group">
          <i className="fa-brands fa-facebook text-3xl lg:text-gray-300 text-white lg:group-hover:text-white"></i>
        </a>

        <a href="#!"
          className="lg:hover:bg-sky-500 bg-sky-500 w-14 h-14 lg:bg-transparent flex items-center justify-center group">
          <i className="fa-brands fa-linkedin text-3xl lg:text-gray-300 text-white lg:group-hover:text-white"></i>
        </a>

        <a href="#!"
          className="lg:hover:bg-red-500 bg-red-500 w-14 h-14 lg:bg-transparent flex items-center justify-center group">
          <i className="fa-brands fa-youtube text-3xl lg:text-gray-300 text-white lg:group-hover:text-white"></i>
        </a>

      </div>
    </div>
  </section>

  {/* <!-- FOOTER --> */}
  <footer className="bg-red-700 w-full flex flex-col justify-center items-center py-20 text-white px-10">
    <div className='lg:justify-between justify-center w-full items-center flex flex-col'>
      {/* <!-- ACESSO --> */}
      <div className='flex flex-col w-full justify-between items-stretch lg:max-w-6xl'>
        <div className="w-full items-center flex">
          <span className="flex items-center justify-center mr-4">ACESSO</span>
          <span className="flex flex-1 items-center font-light w-full bg-white h-0.5"></span>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-4">
          <div>
            <h2 className="mb-3">
              <a href="index.html">Home</a>
            </h2>
            <ul>
              <li className="mb-2">
                <a href="blog.html" className=" hover:underline">BLOG</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Política de Privacidade</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Termos de Uso</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3">Imóveis</h2>
            <ul className="ml-4">
              <li className="mb-2">
                <a href="resultadoBusca.html" className=" hover:underline">Buscar Imóveis</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Cadastre Seu Imóvel</a>
              </li>
              <li className="mb-2">
                <a href="avaliacaoImovel.html" className="hover:underline">Avalie seu Imóvel</a>
              </li>
              <li className="mb-2">
                <a href="imoveisFavoritos.html" className="hover:underline">Favoritos</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Imóveis Visualizados</a>
              </li>
              <li className="mb-2">
                <a href="indice.html" className="hover:underline">Índice de Imóveis</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3">Serviços</h2>
            <ul className="ml-4">
              <li className="mb-2">
                <a href="assessoriaFinanciamento.html" className=" hover:underline">Financiamento</a>
              </li>
              <li className="mb-2">
                <a href="assessoriaJuridica.html" className="hover:underline">Assessoria Jurídica</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Proposta de Compra</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Autorização de Venda</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Autorização de Publicidade</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3">Institucional</h2>
            <ul className="ml-4">
              <li className="mb-2">
                <a href="institucional.html" className=" hover:underline">Sobre a Zimmermann</a>
              </li>
              <li className="mb-2">
                <a href="areasdeatuacao.html" className="hover:underline">Área de Atuação</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Seja Corretor Associado</a>
              </li>
              <li className="mb-2">
                <a href="contact.html" className="hover:underline">Contato</a>
              </li>
              <li className="mb-2 flex gap-5 text-white items-center ">
                <a href="#">
                  <i className="fa-brands fa-instagram text-3xl text-white"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook text-3xl text-white"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin text-3xl text-white"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube text-3xl text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- SOMBRA --> */}
      <img src="/blur-vermelho-1.png" alt="logo Gukenz" width="100%" height="100%" />

      {/* <!-- NOSSAS UNIDADES --> */}
      <div className='flex flex-col w-full justify-between items-stretch pt-14 lg:max-w-6xl'>
        <div className="w-full items-center flex">
          <span className="flex items-center justify-center mr-4">NOSSAS UNIDADES</span>
          <span className="flex flex-1 items-center font-light w-full bg-white h-0.5"></span>
        </div>

        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-4">
          <div>
            <h2 className="mb-3">Agência <span className="font-semibold">Perdizes</span></h2>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="flex justify-start">
                  <a href="">
                    <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                    (11) 99999-0938
                  </a>
                </p>
              </li>
              <li>
                <p className="flex justify-start">
                  <img src="/telephone.svg" className="mr-1" alt=""/>
                  (11) 99999-0938
                </p>
              </li>
              <li className="mb-1">
                <p>R. Campevas, 341</p>
                <p>Perdizes - CEP 05016-010</p>
                <p>São Paulo - SP</p>
              </li>
              <li className="mb-2">
                <a href="#" className="underline">Ver no mapa</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3">Agência <span className="font-semibold">Pinheiros</span></h2>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="flex justify-start">
                  <a href="">
                    <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                    (11) 99939-9934
                  </a>
                </p>
              </li>
              <li>
                <p className="flex justify-start">
                  <img src="/telephone.svg" className="mr-1" alt=""/>
                  (11) 99999-0938
                </p>
              </li>
              <li className="mb-1">
                <p>R. Simão Álvares, 464
                </p>
                <p>Pinheiros - CEP 05417-020
                </p>
                <p>São Paulo - SP</p>
              </li>
              <li className="mb-2">
                <a href="#" className="underline">Ver no mapa</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3">Agência <span className="font-semibold">Jardins</span></h2>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="flex justify-start">
                  <a href="">
                    <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                    (11) 99999-0938
                  </a>
                </p>
              </li>
              <li>
                <p className="flex justify-start">
                  <img src="/telephone.svg" className="mr-1" alt=""/>
                  (11) 99999-0938
                </p>
              </li>
              <li className="mb-1">
                <p>
                  Al. Joaquim Eugênio de Lima, 1281
                </p>
                <p>
                  Jardim Paulista - CEP 01403-003
                </p>
                <p>
                  São Paulo - SP
                </p>
              </li>
              <li className="mb-2">
                <a href="#" className="underline">Ver no mapa</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3">Agência <span className="font-semibold">Vila Romana</span></h2>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="flex justify-start">
                  <a href="">
                    <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                    (11) 93207-3204
                  </a>
                </p>
              </li>
              <li>
                <p className="flex justify-start">
                  <img src="/telephone.svg" className="mr-1" alt=""/>
                  (11) 99999-0938
                </p>
              </li>
              <li className="mb-1">
                <p>
                  R. Tito, 766
                </p>
                <p>
                  Vila Romana - CEP 05051-000
                </p>
                <p>
                  São Paulo - SP</p>
              </li>
              <li className="mb-2">
                <a href="#" className="underline">Ver no mapa</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- SOMBRA --> */}
      <img src="/blur-vermelho-1.png" className="rotate-180" alt="logo Gukenz" width="100%" height="100%" />

      {/* <!-- HORÁRIOS --> */}
      <div className='flex flex-col w-full justify-between items-stretch lg:max-w-6xl'>
        <div className="grid md:grid-cols-4 grid-cols-1 lg:divide-x items-start justify-start w-full">
          <span className="text-center lg:text-sm">
            Segunda a sexta das 8h30 às 18h30
          </span>
          <span className="text-center lg:text-sm">
            Sábado e feriados das 8h30 às 13h30
          </span>
          <span className="text-center lg:text-sm">
            Domingos das 9h às 13h (plantão online)
          </span>
          <span className="text-center lg:text-sm">
            Atendimento online todos os dias.
          </span>
        </div>
      </div>

      {/* <!-- COPYRIGHT --> */}
      <div className='flex flex-col w-full justify-between items-stretch pt-14 lg:max-w-6xl'>
        <div className='grid lg:flex w-full lg:justify-between py-8 gap-10'>
          <span className="text-sm text-center lg:flex">CRECI 15.319-J - © Copyright 2023 - Zimmermann Imóveis LTDA -
            Todos os direitos reservados.</span>
          <div className='flex gap-10 items-end justify-center'>
            <a href="https://sacorp.tec.br/?utm_source=www.mayerbastoscostaadv.com.br&utm_medium=banner&utm_campaign=slogan"
              target='_blank' rel="noreferrer">
              <img src="/sacorp.png" alt="logo Sacorp" width="100%" height="100%" loading="lazy" />
            </a>
            <a href="https://www.gukenz.com.br/" target='_blank' rel="noreferrer">
              <img src="/gukenz.png" alt="logo Gukenz" width="100%" height="100%" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>



    </main>
  )
}


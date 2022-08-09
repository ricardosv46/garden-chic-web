import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type Banco = {
  __typename?: 'Banco';
  bancoId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  numeroCuenta?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BancoInput = {
  bancoId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  numeroCuenta?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
};

export type Blog = {
  __typename?: 'Blog';
  blogId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  keywords?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  categoriaBlogId?: Maybe<Scalars['Int']>;
  CategoriaBlog?: Maybe<CategoriaBlog>;
  usuarioId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  User?: Maybe<User>;
};

export type BlogInput = {
  blogId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  categoriaBlogId?: InputMaybe<Scalars['Int']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  estado?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  numeroBlogs?: Maybe<Scalars['Int']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  descripcion?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
};

export type CategoriaProducto = {
  __typename?: 'CategoriaProducto';
  categoriaProductoId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  descripcion?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ComentarioBlog = {
  __typename?: 'ComentarioBlog';
  comentarioBlogId?: Maybe<Scalars['ID']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  blogId?: Maybe<Scalars['Int']>;
  usuarioId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  User?: Maybe<User>;
};

export type ComentarioBlogInput = {
  id?: InputMaybe<Scalars['ID']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  blogId?: InputMaybe<Scalars['Int']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Contacto = {
  __typename?: 'Contacto';
  contactoId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  tipoServicio?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ContactoInput = {
  nombre?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  tipoServicio?: InputMaybe<Scalars['String']>;
  descripcion?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type DatosEmpresa = {
  __typename?: 'DatosEmpresa';
  nomEmpresa?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  emailContacto?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
  departamento?: Maybe<Scalars['String']>;
  provincia?: Maybe<Scalars['String']>;
  distrito?: Maybe<Scalars['String']>;
};

export type DatosEmpresaInput = {
  nomEmpresa?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  emailContacto?: InputMaybe<Scalars['String']>;
  ruc?: InputMaybe<Scalars['String']>;
  departamento?: InputMaybe<Scalars['String']>;
  provincia?: InputMaybe<Scalars['String']>;
  distrito?: InputMaybe<Scalars['String']>;
};

export type DatosTarjetaInput = {
  type_save?: InputMaybe<Scalars['Int']>;
  source_id?: InputMaybe<Scalars['String']>;
  installments?: InputMaybe<Scalars['Int']>;
  payment_method_id?: InputMaybe<Scalars['String']>;
  tipo_tarjeta?: InputMaybe<Scalars['Int']>;
};

export type Departamento = {
  __typename?: 'Departamento';
  DeparCodi?: Maybe<Scalars['ID']>;
  DeparNom?: Maybe<Scalars['String']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  detallePedidoId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Scalars['String']>;
  cantidad?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  pedidoId?: Maybe<Scalars['Int']>;
  productoId?: Maybe<Scalars['Int']>;
};

export type DetallePedidoInput = {
  detallePedidoId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['String']>;
  cantidad?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  total?: InputMaybe<Scalars['Float']>;
  pedidoId?: InputMaybe<Scalars['Int']>;
  productoId?: InputMaybe<Scalars['Int']>;
};

export type DireccionEnvio = {
  __typename?: 'DireccionEnvio';
  direccionEnvioId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  direccion?: Maybe<Scalars['String']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['Int']>;
};

export type DireccionEnvioInput = {
  direccionEnvioId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  DeparCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  direccion?: InputMaybe<Scalars['String']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
};

export type DireccionUsuario = {
  __typename?: 'DireccionUsuario';
  direccionUsuarioId?: Maybe<Scalars['Int']>;
  tipoDireccion?: Maybe<Scalars['String']>;
  DeparCodi?: Maybe<Scalars['Int']>;
  DeparNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  ProvNom?: Maybe<Scalars['String']>;
  DistCodi?: Maybe<Scalars['Int']>;
  DistNom?: Maybe<Scalars['String']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  usuarioId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type DireccionUsuarioInput = {
  direccionUsuarioId?: InputMaybe<Scalars['Int']>;
  tipoDireccion?: InputMaybe<Scalars['String']>;
  DeparCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  alias?: InputMaybe<Scalars['String']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Distrito = {
  __typename?: 'Distrito';
  DistCodi?: Maybe<Scalars['ID']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  precioEnvio?: Maybe<Scalars['Float']>;
  estado?: Maybe<Scalars['String']>;
};

export type DistritoInput = {
  DistCodi?: InputMaybe<Scalars['ID']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type EfectivoMovil = {
  __typename?: 'EfectivoMovil';
  efectivoMovilId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenQr?: Maybe<Imagen>;
  numeroCelular?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type EfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenQr?: InputMaybe<Scalars['Int']>;
  numeroCelular?: InputMaybe<Scalars['String']>;
};

export type Filtros = {
  __typename?: 'Filtros';
  categorias?: Maybe<Array<Scalars['String']>>;
  precios?: Maybe<Array<Scalars['Float']>>;
};

export type GetAllBancos = {
  __typename?: 'GetAllBancos';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Banco>>;
};

export type GetAllBlogs = {
  __typename?: 'GetAllBlogs';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Blog>>;
};

export type GetAllCategoriaBlogs = {
  __typename?: 'GetAllCategoriaBlogs';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<CategoriaBlog>>;
};

export type GetAllCategoriaProductos = {
  __typename?: 'GetAllCategoriaProductos';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<CategoriaProducto>>;
};

export type GetAllContactos = {
  __typename?: 'GetAllContactos';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Contacto>>;
};

export type GetAllDireccionesUsuarios = {
  __typename?: 'GetAllDireccionesUsuarios';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<DireccionUsuario>>;
};

export type GetAllEfectivoMovil = {
  __typename?: 'GetAllEfectivoMovil';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<EfectivoMovil>>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Imagen>>;
};

export type GetAllNotificacionPedidos = {
  __typename?: 'GetAllNotificacionPedidos';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<NotificacionPedido>>>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Pedido>>;
};

export type GetAllProductos = {
  __typename?: 'GetAllProductos';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Producto>>;
};

export type GetAllSliders = {
  __typename?: 'GetAllSliders';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Slider>>;
};

export type GetAllVendedoras = {
  __typename?: 'GetAllVendedoras';
  numeroTotal?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Vendedora>>;
};

export type GetDatosAdicionalesPedido = {
  __typename?: 'GetDatosAdicionalesPedido';
  DireccionEnvio?: Maybe<DireccionEnvio>;
  Recibo?: Maybe<Recibo>;
  User?: Maybe<User>;
};

export type Imagen = {
  __typename?: 'Imagen';
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreatePrecioEnvioDistrito: Distrito;
  UpdateEstadoDistrito: Distrito;
  CreateImagen: Scalars['String'];
  UpdateImagen: Imagen;
  DeleteImagen: Scalars['String'];
  CreateSlider: Slider;
  UpdateSlider: Slider;
  UpdateEstadoSlider: Slider;
  DeleteSlider: Scalars['String'];
  CreateVendedora: Vendedora;
  UpdateVendedora: Vendedora;
  UpdateEstadoVendedora: Vendedora;
  DeleteVendedora: Scalars['String'];
  CreateBancos: Banco;
  UpdateBancos: Banco;
  UpdateEstadoBanco: Banco;
  DeleteBancos: Scalars['String'];
  CreateContactos: Contacto;
  UpdateEstadoContacto: Contacto;
  CreateEfectivoMovil: EfectivoMovil;
  UpdateEfectivoMovil: EfectivoMovil;
  UpdateEstadoEfectivoMovil: EfectivoMovil;
  DeleteEfectivoMovil: Scalars['String'];
  CreateCategoriaBlog: CategoriaBlog;
  UpdateCategoriaBlog: CategoriaBlog;
  UpdateEstadoCategoriaBlog: CategoriaBlog;
  UpdateDestacadoCategoriaBlog: CategoriaBlog;
  DeleteCategoriaBlog: Scalars['String'];
  CreateBlog: Blog;
  updateBlog: Blog;
  UpdateEstadoBlog: Blog;
  UpdateDestacadoBlog: Blog;
  DeleteBlog: Scalars['String'];
  CreateCategoriaProducto: CategoriaProducto;
  UpdateCategoriaProducto: CategoriaProducto;
  UpdateEstadoCategoriaProducto: CategoriaProducto;
  UpdateDestacadoCategoriaProducto: CategoriaProducto;
  DeleteCategoriaProducto: Scalars['String'];
  CreateProducto: Producto;
  UpdateProducto: Producto;
  UpdateEstadoProducto: Producto;
  UpdateDestacadoProducto: Producto;
  DeleteProducto: Scalars['String'];
  CreatePedido: Pedido;
  UpdateEstadoPedido: Pedido;
  UpdateVistoPedido: Pedido;
  UploadVoucher: Pedido;
  UpdateVistoNotificacionPedido: NotificacionPedido;
  CreateUsuario: User;
  UpdateUsuario: User;
  UpdatePasswordUsuario: User;
  RecoverPasswordUsuario: User;
  Login: User;
  CreateDireccionUsuario: DireccionUsuario;
  UpdateDireccionUsuario: DireccionUsuario;
  DeleteDireccionUsuario: Scalars['String'];
  AsignarDatosEmpresa: DatosEmpresa;
};


export type MutationCreatePrecioEnvioDistritoArgs = {
  input: DistritoInput;
};


export type MutationUpdateEstadoDistritoArgs = {
  input: DistritoInput;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationUpdateImagenArgs = {
  titulo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationCreateSliderArgs = {
  input: SliderInput;
};


export type MutationUpdateSliderArgs = {
  input?: InputMaybe<SliderInput>;
};


export type MutationUpdateEstadoSliderArgs = {
  input?: InputMaybe<UpdateEstadoSliderInput>;
};


export type MutationDeleteSliderArgs = {
  sliderId: Scalars['Int'];
};


export type MutationCreateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationUpdateVendedoraArgs = {
  input?: InputMaybe<VendedoraInput>;
};


export type MutationUpdateEstadoVendedoraArgs = {
  input?: InputMaybe<UpdateEstadoVendedoraInput>;
};


export type MutationDeleteVendedoraArgs = {
  vendedoraId: Scalars['Int'];
};


export type MutationCreateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationUpdateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationUpdateEstadoBancoArgs = {
  input?: InputMaybe<UpdateEstadoBancoInput>;
};


export type MutationDeleteBancosArgs = {
  bancoId: Scalars['Int'];
};


export type MutationCreateContactosArgs = {
  input?: InputMaybe<ContactoInput>;
};


export type MutationUpdateEstadoContactoArgs = {
  input?: InputMaybe<UpdateEstadoContactoInput>;
};


export type MutationCreateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationUpdateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationUpdateEstadoEfectivoMovilArgs = {
  input?: InputMaybe<UpdateEstadoEfectivoMovilInput>;
};


export type MutationDeleteEfectivoMovilArgs = {
  efectivoMovilId: Scalars['Int'];
};


export type MutationCreateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationUpdateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationUpdateEstadoCategoriaBlogArgs = {
  input: UpdateEstadoCategoriaBlogInput;
};


export type MutationUpdateDestacadoCategoriaBlogArgs = {
  input: UpdateDestacadoCategoriaBlogInput;
};


export type MutationDeleteCategoriaBlogArgs = {
  categoriaBlogId: Scalars['Int'];
};


export type MutationCreateBlogArgs = {
  input: BlogInput;
};


export type MutationUpdateBlogArgs = {
  input: BlogInput;
};


export type MutationUpdateEstadoBlogArgs = {
  input: UpdateEstadoBlogInput;
};


export type MutationUpdateDestacadoBlogArgs = {
  input: UpdateDestacadoBlogInput;
};


export type MutationDeleteBlogArgs = {
  blogId: Scalars['Int'];
};


export type MutationCreateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationUpdateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationUpdateEstadoCategoriaProductoArgs = {
  input: UpdateEstadoCategoriaProductoInput;
};


export type MutationUpdateDestacadoCategoriaProductoArgs = {
  input: UpdateDestacadoCategoriaProductoInput;
};


export type MutationDeleteCategoriaProductoArgs = {
  categoriaProductoId: Scalars['Int'];
};


export type MutationCreateProductoArgs = {
  input: ProductoInput;
};


export type MutationUpdateProductoArgs = {
  input: ProductoInput;
};


export type MutationUpdateEstadoProductoArgs = {
  input: UpdateEstadoProductoInput;
};


export type MutationUpdateDestacadoProductoArgs = {
  input: UpdateDestacadoProductoInput;
};


export type MutationDeleteProductoArgs = {
  productoId: Scalars['Int'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3: ReciboInput;
  voucher?: InputMaybe<Scalars['Upload']>;
  input4: DireccionEnvioInput;
  input5?: InputMaybe<DatosTarjetaInput>;
};


export type MutationUpdateEstadoPedidoArgs = {
  input: UpdateEstadoPedidoInput;
};


export type MutationUpdateVistoPedidoArgs = {
  input: UpdateVistoPedidoInput;
};


export type MutationUploadVoucherArgs = {
  idPedido: Scalars['Int'];
  voucher?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateVistoNotificacionPedidoArgs = {
  input: UpdateVistoNotificacionPedidoInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdatePasswordUsuarioArgs = {
  input: UpdatePasswordInput;
};


export type MutationRecoverPasswordUsuarioArgs = {
  input: UserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationCreateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationUpdateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationDeleteDireccionUsuarioArgs = {
  direccionUsuarioId: Scalars['Int'];
};


export type MutationAsignarDatosEmpresaArgs = {
  input: DatosEmpresaInput;
  logo?: InputMaybe<Scalars['Upload']>;
};

export type NotificacionComentarioBlog = {
  __typename?: 'NotificacionComentarioBlog';
  notificacionComentarioBlogId?: Maybe<Scalars['ID']>;
  estado?: Maybe<Scalars['String']>;
  blogId?: Maybe<Scalars['Int']>;
  Blog?: Maybe<Blog>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type NotificacionComentarioBlogInput = {
  id?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
  blogId?: InputMaybe<Scalars['Int']>;
};

export type NotificacionPedido = {
  __typename?: 'NotificacionPedido';
  notificacionPedidoId?: Maybe<Scalars['Int']>;
  visto?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  pedidoId?: Maybe<Scalars['ID']>;
  fechaPedido?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  visto?: Maybe<Scalars['Int']>;
  tipoPago?: Maybe<Scalars['Int']>;
  tipoVenta?: Maybe<Scalars['String']>;
  medioPago?: Maybe<Scalars['String']>;
  numeroOperacion?: Maybe<Scalars['String']>;
  tipoEnvio?: Maybe<Scalars['String']>;
  precioEnvio?: Maybe<Scalars['Float']>;
  precioTotal?: Maybe<Scalars['Float']>;
  voucher?: Maybe<Scalars['String']>;
  ticketPdf?: Maybe<Scalars['String']>;
  direccionEnvio?: Maybe<Scalars['String']>;
  usuarioId?: Maybe<Scalars['Int']>;
  Usuario?: Maybe<User>;
  DetallePedido?: Maybe<Array<DetallePedido>>;
  DireccionEnvio?: Maybe<DireccionEnvio>;
  Recibo?: Maybe<Recibo>;
};

export type PedidoInput = {
  pedidoId?: InputMaybe<Scalars['ID']>;
  fechaPedido?: InputMaybe<Scalars['Date']>;
  estado?: InputMaybe<Scalars['String']>;
  visto?: InputMaybe<Scalars['Int']>;
  tipoPago?: InputMaybe<Scalars['Int']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  medioPago?: InputMaybe<Scalars['String']>;
  numeroOperacion?: InputMaybe<Scalars['String']>;
  tipoEnvio?: InputMaybe<Scalars['Int']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  direccionEnvio?: InputMaybe<Scalars['String']>;
};

export type Precio = {
  __typename?: 'Precio';
  minimo?: Maybe<Scalars['Float']>;
  maximo?: Maybe<Scalars['Float']>;
};

export type Producto = {
  __typename?: 'Producto';
  productoId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  precioReal?: Maybe<Scalars['Float']>;
  precioOferta?: Maybe<Scalars['Float']>;
  stockMinimo?: Maybe<Scalars['Float']>;
  stockReal?: Maybe<Scalars['Float']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  galeria?: Maybe<Array<Maybe<Imagen>>>;
  keywords?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  categoriaProductoId?: Maybe<Scalars['Int']>;
  CategoriaProducto?: Maybe<CategoriaProducto>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductoInput = {
  productoId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  precioReal?: InputMaybe<Scalars['Float']>;
  precioOferta?: InputMaybe<Scalars['Float']>;
  stockMinimo?: InputMaybe<Scalars['Float']>;
  stockReal?: InputMaybe<Scalars['Float']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  galeria?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keywords?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  categoriaProductoId?: InputMaybe<Scalars['Int']>;
};

export type Provincia = {
  __typename?: 'Provincia';
  ProvCodi?: Maybe<Scalars['ID']>;
  ProvNom?: Maybe<Scalars['String']>;
  DeparCodi?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllDepartamentos?: Maybe<Array<Departamento>>;
  GetAllProvincias?: Maybe<Array<Provincia>>;
  GetAllDistritos?: Maybe<Array<Distrito>>;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllSliders: GetAllSliders;
  GetSliderId: Slider;
  GetAllVendedoras: GetAllVendedoras;
  GetVendedoraId: Vendedora;
  GetAllBancos: GetAllBancos;
  GetBancoId: Banco;
  GetAllEfectivoMovil: GetAllEfectivoMovil;
  GetEfectivoMovilId: EfectivoMovil;
  GetAllCategoriaBlogs: GetAllCategoriaBlogs;
  GetAllCategoriaBlogsDestacados: GetAllCategoriaBlogs;
  GetCategoriaBlogSlug: CategoriaBlog;
  GetAllBlogs: GetAllBlogs;
  GetBlogSlug: Blog;
  GetAllBlogsCategoriaSlug: GetAllBlogs;
  GetAllBlogsDestacados: GetAllBlogs;
  GetAllCategoriaProductos: GetAllCategoriaProductos;
  GetAllCategoriaProductosDestacados: GetAllCategoriaProductos;
  GetCategoriaProductoSlug: CategoriaProducto;
  GetAllProductos: GetAllProductos;
  GetAllProductosDestacados: GetAllProductos;
  GetProductoSlug: Producto;
  GetAllProductosPalabraClave: GetAllProductos;
  GetBusquedaAvanzada: GetAllProductos;
  GetAllProductosCategoriaSlug: GetAllProductos;
  GetAllProductosRelacionados: GetAllProductos;
  GetAllPedidos: GetAllPedidos;
  GetPedidoId: Pedido;
  GetAllPedidoUser: GetAllPedidos;
  GetAllNotificacionPedidos: GetAllNotificacionPedidos;
  GetAllTarjetaUsuario?: Maybe<Array<TarjetasUsuarios>>;
  GetDireccionUsuarioId: DireccionUsuario;
  GetAllDireccionUsuarios: GetAllDireccionesUsuarios;
  EmitirTicket: Scalars['String'];
  GetDatosEmpresa: DatosEmpresa;
  GetAllContactos: GetAllContactos;
  GetFiltrosPalabraClave: Filtros;
  GetPrecios?: Maybe<Precio>;
  GetReniec: Reniec;
};


export type QueryGetAllProvinciasArgs = {
  DepCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllDistritosArgs = {
  ProCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllImagenesArgs = {
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSlidersArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetSliderIdArgs = {
  sliderId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllVendedorasArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetVendedoraIdArgs = {
  vendedoraId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBancosArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetBancoIdArgs = {
  bancoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllEfectivoMovilArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetEfectivoMovilIdArgs = {
  efectivoMovilId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllCategoriaBlogsArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsArgs = {
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsCategoriaSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsDestacadosArgs = {
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllCategoriaProductosArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosDestacadosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosPalabraClaveArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetBusquedaAvanzadaArgs = {
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Array<Scalars['Float']>>;
  categoriaSlug?: InputMaybe<Scalars['String']>;
  tipoOrdenacion?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosCategoriaSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosRelacionadosArgs = {
  slug?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidoUserArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllNotificacionPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllTarjetaUsuarioArgs = {
  customer_id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDireccionUsuarioIdArgs = {
  direccionesUsuariosId: Scalars['Int'];
};


export type QueryGetAllDireccionUsuariosArgs = {
  usuarioId: Scalars['Int'];
};


export type QueryEmitirTicketArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllContactosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetFiltrosPalabraClaveArgs = {
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetReniecArgs = {
  dni?: InputMaybe<Scalars['String']>;
};

export type Recibo = {
  __typename?: 'Recibo';
  reciboId?: Maybe<Scalars['ID']>;
  ruc?: Maybe<Scalars['String']>;
  razonSocial?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['Int']>;
};

export type ReciboInput = {
  reciboId?: InputMaybe<Scalars['ID']>;
  ruc?: InputMaybe<Scalars['String']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['Int']>;
};

export type Slider = {
  __typename?: 'Slider';
  sliderId?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  tipoLink?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SliderInput = {
  sliderId?: InputMaybe<Scalars['ID']>;
  titulo?: InputMaybe<Scalars['String']>;
  tipoLink?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type TarjetasUsuarios = {
  __typename?: 'TarjetasUsuarios';
  id?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  expiration_month?: Maybe<Scalars['Int']>;
  expiration_year?: Maybe<Scalars['Int']>;
  first_six_digits?: Maybe<Scalars['String']>;
  last_four_digits?: Maybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateDestacadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoCategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoCategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoProductoInput = {
  productoId?: InputMaybe<Scalars['ID']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoBancoInput = {
  bancoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoCategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoCategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoContactoInput = {
  contactoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoPedidoInput = {
  pedidoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoProductoInput = {
  productoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoSliderInput = {
  sliderId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoVendedoraInput = {
  vendedoraId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdatePasswordInput = {
  id?: InputMaybe<Scalars['ID']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
  passwordAntiguo?: InputMaybe<Scalars['String']>;
};

export type UpdateVistoNotificacionPedidoInput = {
  notificacionPedidoId?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateVistoPedidoInput = {
  pedidoId?: InputMaybe<Scalars['ID']>;
  visto?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  genero?: Maybe<Scalars['Int']>;
  nombres?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['DateTime']>;
  foto?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
};

export type UserInput = {
  id?: InputMaybe<Scalars['ID']>;
  tipoUsuario?: InputMaybe<Scalars['Int']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  genero?: InputMaybe<Scalars['Int']>;
  nombres?: InputMaybe<Scalars['String']>;
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  fechaNacimiento?: InputMaybe<Scalars['Date']>;
  foto?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Vendedora = {
  __typename?: 'Vendedora';
  vendedoraId?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type VendedoraInput = {
  vendedoraId?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  apellidos?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
};

export type Reniec = {
  __typename?: 'reniec';
  DNI?: Maybe<Scalars['String']>;
  ApellidoPaterno?: Maybe<Scalars['String']>;
  ApellidoMaterno?: Maybe<Scalars['String']>;
  Nombres?: Maybe<Scalars['String']>;
  FechaNacimiento?: Maybe<Scalars['String']>;
};

export type CreatePedidoMutationVariables = Exact<{
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput> | DetallePedidoInput>;
  input3: ReciboInput;
  input4: DireccionEnvioInput;
  input5?: InputMaybe<DatosTarjetaInput>;
}>;


export type CreatePedidoMutation = { __typename?: 'Mutation', CreatePedido: { __typename?: 'Pedido', pedidoId?: string | null, fechaPedido?: any | null, estado?: string | null, visto?: number | null, tipoPago?: number | null, medioPago?: string | null, numeroOperacion?: string | null, tipoEnvio?: string | null, precioEnvio?: number | null, precioTotal?: number | null, ticketPdf?: string | null, direccionEnvio?: string | null, usuarioId?: number | null, Usuario?: { __typename?: 'User', id?: string | null, nombres?: string | null, apellidos?: string | null } | null, DetallePedido?: Array<{ __typename?: 'DetallePedido', pedidoId?: number | null, cantidad?: number | null, precio?: number | null }> | null } };

export type CreateUsuarioMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUsuarioMutation = { __typename?: 'Mutation', CreateUsuario: { __typename?: 'User', nombres?: string | null, apellidos?: string | null, email?: string | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, genero?: number | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, fechaNacimiento?: any | null, foto?: string | null, email?: string | null, apiToken?: string | null, customer_id?: string | null } };

export type GetAllBlogsQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBlogsQuery = { __typename?: 'Query', GetAllBlogs: { __typename?: 'GetAllBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', titulo?: string | null } | null }> | null } };

export type GetAllCategoriaBlogsQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllCategoriaBlogsQuery = { __typename?: 'Query', GetAllCategoriaBlogs: { __typename?: 'GetAllCategoriaBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllCategoriaProductosQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllCategoriaProductosQuery = { __typename?: 'Query', GetAllCategoriaProductos: { __typename?: 'GetAllCategoriaProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllDepartamentosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDepartamentosQuery = { __typename?: 'Query', GetAllDepartamentos?: Array<{ __typename?: 'Departamento', DeparNom?: string | null, DeparCodi?: string | null }> | null };

export type GetAllDistritosQueryVariables = Exact<{
  ProCode: Scalars['String'];
}>;


export type GetAllDistritosQuery = { __typename?: 'Query', GetAllDistritos?: Array<{ __typename?: 'Distrito', DistCodi?: string | null, DistNom?: string | null, ProvCodi?: number | null, precioEnvio?: number | null, estado?: string | null }> | null };

export type GetAllProductosQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllProductosQuery = { __typename?: 'Query', GetAllProductos: { __typename?: 'GetAllProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null, CategoriaProducto?: { __typename?: 'CategoriaProducto', titulo?: string | null } | null }> | null } };

export type GetAllProvinciasQueryVariables = Exact<{
  DepCode: Scalars['String'];
}>;


export type GetAllProvinciasQuery = { __typename?: 'Query', GetAllProvincias?: Array<{ __typename?: 'Provincia', ProvNom?: string | null, DeparCodi?: number | null, ProvCodi?: string | null }> | null };

export type GetBlogSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetBlogSlugQuery = { __typename?: 'Query', GetBlogSlug: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', titulo?: string | null } | null } };

export type GetBusquedaAvanzadaQueryVariables = Exact<{
  categoriaSlug?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Array<Scalars['Float']> | Scalars['Float']>;
  tipoOrdenacion?: InputMaybe<Scalars['String']>;
}>;


export type GetBusquedaAvanzadaQuery = { __typename?: 'Query', GetBusquedaAvanzada: { __typename?: 'GetAllProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Producto', categoriaProductoId?: number | null, created_at?: any | null, descripcionCorta?: string | null, descripcionLarga?: string | null, destacado?: string | null, estado?: string | null, keywords?: string | null, precioOferta?: number | null, precioReal?: number | null, productoId?: string | null, slug?: string | null, stockMinimo?: number | null, stockReal?: number | null, titulo?: string | null, imagenPrincipal?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null, CategoriaProducto?: { __typename?: 'CategoriaProducto', titulo?: string | null, slug?: string | null, estado?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', estado?: string | null, id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } };

export type GetPreciosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPreciosQuery = { __typename?: 'Query', GetPrecios?: { __typename?: 'Precio', minimo?: number | null, maximo?: number | null } | null };

export type GetAllProductosPalabraClaveQueryVariables = Exact<{
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  palabraClave?: InputMaybe<Scalars['String']>;
}>;


export type GetAllProductosPalabraClaveQuery = { __typename?: 'Query', GetAllProductosPalabraClave: { __typename?: 'GetAllProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Producto', titulo?: string | null, slug?: string | null }> | null } };

export type GetAllProductosRelacionadosQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllProductosRelacionadosQuery = { __typename?: 'Query', GetAllProductosRelacionados: { __typename?: 'GetAllProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Producto', titulo?: string | null, slug?: string | null, categoriaProductoId?: number | null }> | null } };


export const CreatePedidoDocument = gql`
    mutation CreatePedido($input1: PedidoInput!, $input2: [DetallePedidoInput!], $input3: ReciboInput!, $input4: DireccionEnvioInput!, $input5: DatosTarjetaInput) {
  CreatePedido(
    input1: $input1
    input2: $input2
    input3: $input3
    input4: $input4
    input5: $input5
  ) {
    pedidoId
    fechaPedido
    estado
    visto
    tipoPago
    medioPago
    numeroOperacion
    tipoEnvio
    precioEnvio
    precioTotal
    ticketPdf
    direccionEnvio
    usuarioId
    Usuario {
      id
      nombres
      apellidos
    }
    DetallePedido {
      pedidoId
      cantidad
      precio
    }
  }
}
    `;
export type CreatePedidoMutationFn = Apollo.MutationFunction<CreatePedidoMutation, CreatePedidoMutationVariables>;

/**
 * __useCreatePedidoMutation__
 *
 * To run a mutation, you first call `useCreatePedidoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePedidoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPedidoMutation, { data, loading, error }] = useCreatePedidoMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *      input2: // value for 'input2'
 *      input3: // value for 'input3'
 *      input4: // value for 'input4'
 *      input5: // value for 'input5'
 *   },
 * });
 */
export function useCreatePedidoMutation(baseOptions?: Apollo.MutationHookOptions<CreatePedidoMutation, CreatePedidoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePedidoMutation, CreatePedidoMutationVariables>(CreatePedidoDocument, options);
      }
export type CreatePedidoMutationHookResult = ReturnType<typeof useCreatePedidoMutation>;
export type CreatePedidoMutationResult = Apollo.MutationResult<CreatePedidoMutation>;
export type CreatePedidoMutationOptions = Apollo.BaseMutationOptions<CreatePedidoMutation, CreatePedidoMutationVariables>;
export const CreateUsuarioDocument = gql`
    mutation CreateUsuario($input: UserInput!) {
  CreateUsuario(input: $input) {
    nombres
    apellidos
    email
  }
}
    `;
export type CreateUsuarioMutationFn = Apollo.MutationFunction<CreateUsuarioMutation, CreateUsuarioMutationVariables>;

/**
 * __useCreateUsuarioMutation__
 *
 * To run a mutation, you first call `useCreateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsuarioMutation, { data, loading, error }] = useCreateUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUsuarioMutation, CreateUsuarioMutationVariables>(CreateUsuarioDocument, options);
      }
export type CreateUsuarioMutationHookResult = ReturnType<typeof useCreateUsuarioMutation>;
export type CreateUsuarioMutationResult = Apollo.MutationResult<CreateUsuarioMutation>;
export type CreateUsuarioMutationOptions = Apollo.BaseMutationOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    genero
    nombres
    apellidos
    celular
    fechaNacimiento
    foto
    email
    apiToken
    customer_id
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetAllBlogsDocument = gql`
    query GetAllBlogs($pagina: Int, $numeroPagina: Int, $estado: String) {
  GetAllBlogs(pagina: $pagina, numeroPagina: $numeroPagina, estado: $estado) {
    numeroTotal
    data {
      blogId
      titulo
      slug
      descripcionCorta
      descripcionLarga
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      keywords
      estado
      destacado
      categoriaBlogId
      CategoriaBlog {
        titulo
      }
      usuarioId
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetAllCategoriaBlogsDocument = gql`
    query GetAllCategoriaBlogs($estado: String) {
  GetAllCategoriaBlogs(estado: $estado) {
    numeroTotal
    data {
      categoriaBlogId
      titulo
      slug
      keywords
      descripcion
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      estado
      created_at
      updated_at
      numeroBlogs
    }
  }
}
    `;

/**
 * __useGetAllCategoriaBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaBlogsQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllCategoriaBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
      }
export function useGetAllCategoriaBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
        }
export type GetAllCategoriaBlogsQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsQuery>;
export type GetAllCategoriaBlogsLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsLazyQuery>;
export type GetAllCategoriaBlogsQueryResult = Apollo.QueryResult<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>;
export const GetAllCategoriaProductosDocument = gql`
    query GetAllCategoriaProductos($estado: String) {
  GetAllCategoriaProductos(estado: $estado) {
    numeroTotal
    data {
      categoriaProductoId
      titulo
      slug
      estado
      keywords
      descripcion
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllCategoriaProductosQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaProductosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaProductosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaProductosQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllCategoriaProductosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>(GetAllCategoriaProductosDocument, options);
      }
export function useGetAllCategoriaProductosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>(GetAllCategoriaProductosDocument, options);
        }
export type GetAllCategoriaProductosQueryHookResult = ReturnType<typeof useGetAllCategoriaProductosQuery>;
export type GetAllCategoriaProductosLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaProductosLazyQuery>;
export type GetAllCategoriaProductosQueryResult = Apollo.QueryResult<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>;
export const GetAllDepartamentosDocument = gql`
    query GetAllDepartamentos {
  GetAllDepartamentos {
    DeparNom
    DeparCodi
  }
}
    `;

/**
 * __useGetAllDepartamentosQuery__
 *
 * To run a query within a React component, call `useGetAllDepartamentosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDepartamentosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDepartamentosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDepartamentosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDepartamentosQuery, GetAllDepartamentosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDepartamentosQuery, GetAllDepartamentosQueryVariables>(GetAllDepartamentosDocument, options);
      }
export function useGetAllDepartamentosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDepartamentosQuery, GetAllDepartamentosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDepartamentosQuery, GetAllDepartamentosQueryVariables>(GetAllDepartamentosDocument, options);
        }
export type GetAllDepartamentosQueryHookResult = ReturnType<typeof useGetAllDepartamentosQuery>;
export type GetAllDepartamentosLazyQueryHookResult = ReturnType<typeof useGetAllDepartamentosLazyQuery>;
export type GetAllDepartamentosQueryResult = Apollo.QueryResult<GetAllDepartamentosQuery, GetAllDepartamentosQueryVariables>;
export const GetAllDistritosDocument = gql`
    query GetAllDistritos($ProCode: String!) {
  GetAllDistritos(ProCode: $ProCode) {
    DistCodi
    DistNom
    ProvCodi
    precioEnvio
    estado
  }
}
    `;

/**
 * __useGetAllDistritosQuery__
 *
 * To run a query within a React component, call `useGetAllDistritosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDistritosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDistritosQuery({
 *   variables: {
 *      ProCode: // value for 'ProCode'
 *   },
 * });
 */
export function useGetAllDistritosQuery(baseOptions: Apollo.QueryHookOptions<GetAllDistritosQuery, GetAllDistritosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDistritosQuery, GetAllDistritosQueryVariables>(GetAllDistritosDocument, options);
      }
export function useGetAllDistritosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDistritosQuery, GetAllDistritosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDistritosQuery, GetAllDistritosQueryVariables>(GetAllDistritosDocument, options);
        }
export type GetAllDistritosQueryHookResult = ReturnType<typeof useGetAllDistritosQuery>;
export type GetAllDistritosLazyQueryHookResult = ReturnType<typeof useGetAllDistritosLazyQuery>;
export type GetAllDistritosQueryResult = Apollo.QueryResult<GetAllDistritosQuery, GetAllDistritosQueryVariables>;
export const GetAllProductosDocument = gql`
    query GetAllProductos($pagina: Int, $numeroPagina: Int, $estado: String) {
  GetAllProductos(pagina: $pagina, numeroPagina: $numeroPagina, estado: $estado) {
    numeroTotal
    data {
      productoId
      titulo
      slug
      estado
      descripcionCorta
      descripcionLarga
      precioReal
      precioOferta
      stockMinimo
      stockReal
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      galeria {
        id
        titulo
        estado
        url
      }
      keywords
      destacado
      estado
      categoriaProductoId
      CategoriaProducto {
        titulo
      }
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllProductosQuery__
 *
 * To run a query within a React component, call `useGetAllProductosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductosQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllProductosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductosQuery, GetAllProductosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductosQuery, GetAllProductosQueryVariables>(GetAllProductosDocument, options);
      }
export function useGetAllProductosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductosQuery, GetAllProductosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductosQuery, GetAllProductosQueryVariables>(GetAllProductosDocument, options);
        }
export type GetAllProductosQueryHookResult = ReturnType<typeof useGetAllProductosQuery>;
export type GetAllProductosLazyQueryHookResult = ReturnType<typeof useGetAllProductosLazyQuery>;
export type GetAllProductosQueryResult = Apollo.QueryResult<GetAllProductosQuery, GetAllProductosQueryVariables>;
export const GetAllProvinciasDocument = gql`
    query GetAllProvincias($DepCode: String!) {
  GetAllProvincias(DepCode: $DepCode) {
    ProvNom
    DeparCodi
    ProvCodi
  }
}
    `;

/**
 * __useGetAllProvinciasQuery__
 *
 * To run a query within a React component, call `useGetAllProvinciasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProvinciasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProvinciasQuery({
 *   variables: {
 *      DepCode: // value for 'DepCode'
 *   },
 * });
 */
export function useGetAllProvinciasQuery(baseOptions: Apollo.QueryHookOptions<GetAllProvinciasQuery, GetAllProvinciasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProvinciasQuery, GetAllProvinciasQueryVariables>(GetAllProvinciasDocument, options);
      }
export function useGetAllProvinciasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProvinciasQuery, GetAllProvinciasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProvinciasQuery, GetAllProvinciasQueryVariables>(GetAllProvinciasDocument, options);
        }
export type GetAllProvinciasQueryHookResult = ReturnType<typeof useGetAllProvinciasQuery>;
export type GetAllProvinciasLazyQueryHookResult = ReturnType<typeof useGetAllProvinciasLazyQuery>;
export type GetAllProvinciasQueryResult = Apollo.QueryResult<GetAllProvinciasQuery, GetAllProvinciasQueryVariables>;
export const GetBlogSlugDocument = gql`
    query GetBlogSlug($slug: String) {
  GetBlogSlug(slug: $slug) {
    blogId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    CategoriaBlog {
      titulo
    }
    usuarioId
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetBlogSlugQuery__
 *
 * To run a query within a React component, call `useGetBlogSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
      }
export function useGetBlogSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
        }
export type GetBlogSlugQueryHookResult = ReturnType<typeof useGetBlogSlugQuery>;
export type GetBlogSlugLazyQueryHookResult = ReturnType<typeof useGetBlogSlugLazyQuery>;
export type GetBlogSlugQueryResult = Apollo.QueryResult<GetBlogSlugQuery, GetBlogSlugQueryVariables>;
export const GetBusquedaAvanzadaDocument = gql`
    query GetBusquedaAvanzada($categoriaSlug: String, $destacado: String, $numeroPagina: Int, $pagina: Int, $precio: [Float!], $tipoOrdenacion: String) {
  GetBusquedaAvanzada(
    categoriaSlug: $categoriaSlug
    destacado: $destacado
    numeroPagina: $numeroPagina
    pagina: $pagina
    precio: $precio
    tipoOrdenacion: $tipoOrdenacion
  ) {
    numeroTotal
    data {
      imagenPrincipal {
        estado
        id
        titulo
        url
      }
      CategoriaProducto {
        titulo
        slug
        estado
      }
      categoriaProductoId
      created_at
      descripcionCorta
      descripcionLarga
      destacado
      estado
      imagenSecundaria {
        estado
        id
        titulo
        url
      }
      keywords
      precioOferta
      precioReal
      productoId
      slug
      stockMinimo
      stockReal
      titulo
    }
    numeroTotal
  }
}
    `;

/**
 * __useGetBusquedaAvanzadaQuery__
 *
 * To run a query within a React component, call `useGetBusquedaAvanzadaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusquedaAvanzadaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusquedaAvanzadaQuery({
 *   variables: {
 *      categoriaSlug: // value for 'categoriaSlug'
 *      destacado: // value for 'destacado'
 *      numeroPagina: // value for 'numeroPagina'
 *      pagina: // value for 'pagina'
 *      precio: // value for 'precio'
 *      tipoOrdenacion: // value for 'tipoOrdenacion'
 *   },
 * });
 */
export function useGetBusquedaAvanzadaQuery(baseOptions?: Apollo.QueryHookOptions<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>(GetBusquedaAvanzadaDocument, options);
      }
export function useGetBusquedaAvanzadaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>(GetBusquedaAvanzadaDocument, options);
        }
export type GetBusquedaAvanzadaQueryHookResult = ReturnType<typeof useGetBusquedaAvanzadaQuery>;
export type GetBusquedaAvanzadaLazyQueryHookResult = ReturnType<typeof useGetBusquedaAvanzadaLazyQuery>;
export type GetBusquedaAvanzadaQueryResult = Apollo.QueryResult<GetBusquedaAvanzadaQuery, GetBusquedaAvanzadaQueryVariables>;
export const GetPreciosDocument = gql`
    query GetPrecios {
  GetPrecios {
    minimo
    maximo
  }
}
    `;

/**
 * __useGetPreciosQuery__
 *
 * To run a query within a React component, call `useGetPreciosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreciosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreciosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPreciosQuery(baseOptions?: Apollo.QueryHookOptions<GetPreciosQuery, GetPreciosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPreciosQuery, GetPreciosQueryVariables>(GetPreciosDocument, options);
      }
export function useGetPreciosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPreciosQuery, GetPreciosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPreciosQuery, GetPreciosQueryVariables>(GetPreciosDocument, options);
        }
export type GetPreciosQueryHookResult = ReturnType<typeof useGetPreciosQuery>;
export type GetPreciosLazyQueryHookResult = ReturnType<typeof useGetPreciosLazyQuery>;
export type GetPreciosQueryResult = Apollo.QueryResult<GetPreciosQuery, GetPreciosQueryVariables>;
export const GetAllProductosPalabraClaveDocument = gql`
    query GetAllProductosPalabraClave($numeroPagina: Int, $pagina: Int, $palabraClave: String) {
  GetAllProductosPalabraClave(
    numeroPagina: $numeroPagina
    pagina: $pagina
    palabraClave: $palabraClave
  ) {
    numeroTotal
    data {
      titulo
      slug
    }
  }
}
    `;

/**
 * __useGetAllProductosPalabraClaveQuery__
 *
 * To run a query within a React component, call `useGetAllProductosPalabraClaveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductosPalabraClaveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductosPalabraClaveQuery({
 *   variables: {
 *      numeroPagina: // value for 'numeroPagina'
 *      pagina: // value for 'pagina'
 *      palabraClave: // value for 'palabraClave'
 *   },
 * });
 */
export function useGetAllProductosPalabraClaveQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductosPalabraClaveQuery, GetAllProductosPalabraClaveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductosPalabraClaveQuery, GetAllProductosPalabraClaveQueryVariables>(GetAllProductosPalabraClaveDocument, options);
      }
export function useGetAllProductosPalabraClaveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductosPalabraClaveQuery, GetAllProductosPalabraClaveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductosPalabraClaveQuery, GetAllProductosPalabraClaveQueryVariables>(GetAllProductosPalabraClaveDocument, options);
        }
export type GetAllProductosPalabraClaveQueryHookResult = ReturnType<typeof useGetAllProductosPalabraClaveQuery>;
export type GetAllProductosPalabraClaveLazyQueryHookResult = ReturnType<typeof useGetAllProductosPalabraClaveLazyQuery>;
export type GetAllProductosPalabraClaveQueryResult = Apollo.QueryResult<GetAllProductosPalabraClaveQuery, GetAllProductosPalabraClaveQueryVariables>;
export const GetAllProductosRelacionadosDocument = gql`
    query GetAllProductosRelacionados($slug: String, $pagina: Int, $numeroPagina: Int) {
  GetAllProductosRelacionados(
    slug: $slug
    pagina: $pagina
    numeroPagina: $numeroPagina
  ) {
    numeroTotal
    data {
      titulo
      slug
      categoriaProductoId
    }
  }
}
    `;

/**
 * __useGetAllProductosRelacionadosQuery__
 *
 * To run a query within a React component, call `useGetAllProductosRelacionadosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductosRelacionadosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductosRelacionadosQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *   },
 * });
 */
export function useGetAllProductosRelacionadosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>(GetAllProductosRelacionadosDocument, options);
      }
export function useGetAllProductosRelacionadosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>(GetAllProductosRelacionadosDocument, options);
        }
export type GetAllProductosRelacionadosQueryHookResult = ReturnType<typeof useGetAllProductosRelacionadosQuery>;
export type GetAllProductosRelacionadosLazyQueryHookResult = ReturnType<typeof useGetAllProductosRelacionadosLazyQuery>;
export type GetAllProductosRelacionadosQueryResult = Apollo.QueryResult<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>;
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
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Banco = {
  __typename?: 'Banco';
  bancoId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  numeroCuenta?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BancoInput = {
  bancoId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  numeroCuenta?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Blog = {
  __typename?: 'Blog';
  CategoriaBlog?: Maybe<CategoriaBlog>;
  User?: Maybe<User>;
  blogId?: Maybe<Scalars['ID']>;
  categoriaBlogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type BlogInput = {
  blogId?: InputMaybe<Scalars['ID']>;
  categoriaBlogId?: InputMaybe<Scalars['Int']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  numeroBlogs?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  descripcion?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type CategoriaProducto = {
  __typename?: 'CategoriaProducto';
  categoriaProductoId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ComentarioBlog = {
  __typename?: 'ComentarioBlog';
  User?: Maybe<User>;
  blogId?: Maybe<Scalars['Int']>;
  comentarioBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type ComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type DatosEmpresa = {
  __typename?: 'DatosEmpresa';
  departamento?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  distrito?: Maybe<Scalars['String']>;
  emailContacto?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  nomEmpresa?: Maybe<Scalars['String']>;
  provincia?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
};

export type DatosEmpresaInput = {
  departamento?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  distrito?: InputMaybe<Scalars['String']>;
  emailContacto?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  nomEmpresa?: InputMaybe<Scalars['String']>;
  provincia?: InputMaybe<Scalars['String']>;
  ruc?: InputMaybe<Scalars['String']>;
};

export type DatosTarjetaInput = {
  installments?: InputMaybe<Scalars['Int']>;
  payment_method_id?: InputMaybe<Scalars['String']>;
  source_id?: InputMaybe<Scalars['String']>;
  tipo_tarjeta?: InputMaybe<Scalars['Int']>;
  type_save?: InputMaybe<Scalars['Int']>;
};

export type Departamento = {
  __typename?: 'Departamento';
  DeparCodi?: Maybe<Scalars['ID']>;
  DeparNom?: Maybe<Scalars['String']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  cantidad?: Maybe<Scalars['Int']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  imagenPrincipal?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  productoId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
};

export type DetallePedidoInput = {
  cantidad?: InputMaybe<Scalars['Int']>;
  detallePedidoId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  pedidoId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  productoId?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
};

export type DireccionEnvio = {
  __typename?: 'DireccionEnvio';
  DeparCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  celular?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  direccionEnvioId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['Int']>;
};

export type DireccionEnvioInput = {
  DeparCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  celular?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  direccionEnvioId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
};

export type DireccionUsuario = {
  __typename?: 'DireccionUsuario';
  DeparCodi?: Maybe<Scalars['Int']>;
  DeparNom?: Maybe<Scalars['String']>;
  DistCodi?: Maybe<Scalars['Int']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  ProvNom?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  direccion?: Maybe<Scalars['String']>;
  direccionUsuarioId?: Maybe<Scalars['Int']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  tipoDireccion?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type DireccionUsuarioInput = {
  DeparCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  alias?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  direccionUsuarioId?: InputMaybe<Scalars['Int']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
  tipoDireccion?: InputMaybe<Scalars['String']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Distrito = {
  __typename?: 'Distrito';
  DistCodi?: Maybe<Scalars['ID']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  precioEnvio?: Maybe<Scalars['Float']>;
};

export type DistritoInput = {
  DistCodi?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
};

export type EfectivoMovil = {
  __typename?: 'EfectivoMovil';
  created_at?: Maybe<Scalars['DateTime']>;
  efectivoMovilId?: Maybe<Scalars['ID']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenQr?: Maybe<Imagenes>;
  numeroCelular?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type EfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenQr?: InputMaybe<Scalars['Int']>;
  numeroCelular?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Filtros = {
  __typename?: 'Filtros';
  categorias?: Maybe<Array<Scalars['String']>>;
  precios?: Maybe<Array<Scalars['Float']>>;
};

export type GetAllBancos = {
  __typename?: 'GetAllBancos';
  data?: Maybe<Array<Banco>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllBlogs = {
  __typename?: 'GetAllBlogs';
  data?: Maybe<Array<Blog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCategoriaBlogs = {
  __typename?: 'GetAllCategoriaBlogs';
  data?: Maybe<Array<CategoriaBlog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCategoriaProductos = {
  __typename?: 'GetAllCategoriaProductos';
  data?: Maybe<Array<CategoriaProducto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllDireccionesUsuarios = {
  __typename?: 'GetAllDireccionesUsuarios';
  data?: Maybe<Array<DireccionUsuario>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEfectivoMovil = {
  __typename?: 'GetAllEfectivoMovil';
  data?: Maybe<Array<EfectivoMovil>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllNotificacionPedidos = {
  __typename?: 'GetAllNotificacionPedidos';
  data?: Maybe<Array<Maybe<NotificacionPedido>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllProductos = {
  __typename?: 'GetAllProductos';
  data?: Maybe<Array<Producto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSliders = {
  __typename?: 'GetAllSliders';
  data?: Maybe<Array<Slider>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVendedoras = {
  __typename?: 'GetAllVendedoras';
  data?: Maybe<Array<Vendedora>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetDatosAdicionalesPedido = {
  __typename?: 'GetDatosAdicionalesPedido';
  DireccionEnvio?: Maybe<DireccionEnvio>;
  Recibo?: Maybe<Recibo>;
  User?: Maybe<User>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AsignarDatosEmpresa: DatosEmpresa;
  CreateBancos: Banco;
  CreateBlog: Blog;
  CreateCategoriaBlog: CategoriaBlog;
  CreateCategoriaProducto: CategoriaProducto;
  CreateDireccionUsuario: DireccionUsuario;
  CreateEfectivoMovil: EfectivoMovil;
  CreateImagen: Scalars['String'];
  CreatePedido: Pedido;
  CreatePrecioEnvioDistrito: Distrito;
  CreateProducto: Producto;
  CreateSlider: Slider;
  CreateUsuario: User;
  CreateVendedora: Vendedora;
  DeleteBancos: Scalars['String'];
  DeleteBlog: Scalars['String'];
  DeleteCategoriaBlog: Scalars['String'];
  DeleteCategoriaProducto: Scalars['String'];
  DeleteDireccionUsuario: Scalars['String'];
  DeleteEfectivoMovil: Scalars['String'];
  DeleteImagen: Scalars['String'];
  DeleteProducto: Scalars['String'];
  DeleteSlider: Scalars['String'];
  DeleteVendedora: Scalars['String'];
  Login: User;
  RecoverPasswordUsuario: User;
  UpdateBancos: Banco;
  UpdateCategoriaBlog: CategoriaBlog;
  UpdateCategoriaProducto: CategoriaProducto;
  UpdateDestacadoBlog: Blog;
  UpdateDestacadoProducto: Producto;
  UpdateDireccionUsuario: DireccionUsuario;
  UpdateEfectivoMovil: EfectivoMovil;
  UpdateEstadoBanco: Banco;
  UpdateEstadoBlog: Blog;
  UpdateEstadoCategoriaBlog: CategoriaBlog;
  UpdateEstadoCategoriaProducto: CategoriaProducto;
  UpdateEstadoDistrito: Distrito;
  UpdateEstadoEfectivoMovil: EfectivoMovil;
  UpdateEstadoPedido: Pedido;
  UpdateEstadoProducto: Producto;
  UpdateEstadoSlider: Slider;
  UpdateEstadoVendedora: Vendedora;
  UpdateImagen: Imagenes;
  UpdatePasswordUsuario: User;
  UpdateProducto: Producto;
  UpdateSlider: Slider;
  UpdateUsuario: User;
  UpdateVendedora: Vendedora;
  UpdateVistoNotificacionPedido: NotificacionPedido;
  UpdateVistoPedido: Pedido;
  UploadVoucher: Pedido;
  updateBlog: Blog;
};


export type MutationAsignarDatosEmpresaArgs = {
  input: DatosEmpresaInput;
  logo?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationCreateBlogArgs = {
  input: BlogInput;
};


export type MutationCreateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationCreateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationCreateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationCreateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3: ReciboInput;
  input4: DireccionEnvioInput;
  input5?: InputMaybe<DatosTarjetaInput>;
  voucher?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreatePrecioEnvioDistritoArgs = {
  input: DistritoInput;
};


export type MutationCreateProductoArgs = {
  input: ProductoInput;
};


export type MutationCreateSliderArgs = {
  input: SliderInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationDeleteBancosArgs = {
  bancoId: Scalars['Int'];
};


export type MutationDeleteBlogArgs = {
  blogId: Scalars['Int'];
};


export type MutationDeleteCategoriaBlogArgs = {
  categoriaBlogId: Scalars['Int'];
};


export type MutationDeleteCategoriaProductoArgs = {
  categoriaProductoId: Scalars['Int'];
};


export type MutationDeleteDireccionUsuarioArgs = {
  direccionUsuarioId: Scalars['Int'];
};


export type MutationDeleteEfectivoMovilArgs = {
  efectivoMovilId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteProductoArgs = {
  productoId: Scalars['Int'];
};


export type MutationDeleteSliderArgs = {
  sliderId: Scalars['Int'];
};


export type MutationDeleteVendedoraArgs = {
  vendedoraId: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationUpdateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationUpdateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationUpdateDestacadoBlogArgs = {
  input: UpdateDestacadoBlogInput;
};


export type MutationUpdateDestacadoProductoArgs = {
  input: UpdateDestacadoProductoInput;
};


export type MutationUpdateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationUpdateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationUpdateEstadoBancoArgs = {
  input?: InputMaybe<UpdateEstadoBancoInput>;
};


export type MutationUpdateEstadoBlogArgs = {
  input: UpdateEstadoBlogInput;
};


export type MutationUpdateEstadoCategoriaBlogArgs = {
  input: UpdateEstadoCategoriaBlogInput;
};


export type MutationUpdateEstadoCategoriaProductoArgs = {
  input: UpdateEstadoCategoriaProductoInput;
};


export type MutationUpdateEstadoDistritoArgs = {
  input: DistritoInput;
};


export type MutationUpdateEstadoEfectivoMovilArgs = {
  input?: InputMaybe<UpdateEstadoEfectivoMovilInput>;
};


export type MutationUpdateEstadoPedidoArgs = {
  input: UpdateEstadoPedidoInput;
};


export type MutationUpdateEstadoProductoArgs = {
  input: UpdateEstadoProductoInput;
};


export type MutationUpdateEstadoSliderArgs = {
  input?: InputMaybe<UpdateEstadoSliderInput>;
};


export type MutationUpdateEstadoVendedoraArgs = {
  input?: InputMaybe<UpdateEstadoVendedoraInput>;
};


export type MutationUpdateImagenArgs = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordUsuarioArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdateProductoArgs = {
  input: ProductoInput;
};


export type MutationUpdateSliderArgs = {
  input?: InputMaybe<SliderInput>;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateVendedoraArgs = {
  input?: InputMaybe<VendedoraInput>;
};


export type MutationUpdateVistoNotificacionPedidoArgs = {
  input: UpdateVistoNotificacionPedidoInput;
};


export type MutationUpdateVistoPedidoArgs = {
  input: UpdateVistoPedidoInput;
};


export type MutationUploadVoucherArgs = {
  idPedido: Scalars['Int'];
  voucher?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateBlogArgs = {
  input: BlogInput;
};

export type NotificacionComentarioBlog = {
  __typename?: 'NotificacionComentarioBlog';
  Blog?: Maybe<Blog>;
  blogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  notificacionComentarioBlogId?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type NotificacionComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type NotificacionPedido = {
  __typename?: 'NotificacionPedido';
  created_at?: Maybe<Scalars['DateTime']>;
  notificacionPedidoId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  visto?: Maybe<Scalars['Int']>;
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
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
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
  DetallePedido?: Maybe<Array<DetallePedido>>;
  Usuario?: Maybe<User>;
  banco?: Maybe<Scalars['String']>;
  direccionEnvio?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  fechaPedido?: Maybe<Scalars['DateTime']>;
  numeroOperacion?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioEnvio?: Maybe<Scalars['Float']>;
  precioTotal?: Maybe<Scalars['Float']>;
  ticketPdf?: Maybe<Scalars['String']>;
  tipoEnvio?: Maybe<Scalars['String']>;
  tipoPago?: Maybe<Scalars['Int']>;
  tipoVenta?: Maybe<Scalars['Int']>;
  usuarioId?: Maybe<Scalars['Int']>;
  visto?: Maybe<Scalars['Int']>;
  voucher?: Maybe<Scalars['String']>;
};

export type PedidoInput = {
  banco?: InputMaybe<Scalars['String']>;
  direccionEnvio?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  fechaPedido?: InputMaybe<Scalars['Date']>;
  numeroOperacion?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  tipoEnvio?: InputMaybe<Scalars['Int']>;
  tipoPago?: InputMaybe<Scalars['Int']>;
  tipoVenta?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};

export type Producto = {
  __typename?: 'Producto';
  CategoriaProducto?: Maybe<CategoriaProducto>;
  categoriaProductoId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  galeria?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  precioOferta?: Maybe<Scalars['Float']>;
  precioReal?: Maybe<Scalars['Float']>;
  productoId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  stockMinimo?: Maybe<Scalars['Float']>;
  stockReal?: Maybe<Scalars['Float']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['Int']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  galeria?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  precioOferta?: InputMaybe<Scalars['Float']>;
  precioReal?: InputMaybe<Scalars['Float']>;
  productoId?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  stockMinimo?: InputMaybe<Scalars['Float']>;
  stockReal?: InputMaybe<Scalars['Float']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Provincia = {
  __typename?: 'Provincia';
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['ID']>;
  ProvNom?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  EmitirTicket: Scalars['String'];
  GetAllBancos: GetAllBancos;
  GetAllBlogs: GetAllBlogs;
  GetAllBlogsCategoriaSlug: GetAllBlogs;
  GetAllBlogsDestacados: GetAllBlogs;
  GetAllCategoriaBlogs: GetAllCategoriaBlogs;
  GetAllCategoriaProductos: GetAllCategoriaProductos;
  GetAllDepartamentos?: Maybe<Array<Departamento>>;
  GetAllDireccionUsuarios: GetAllDireccionesUsuarios;
  GetAllDistritos?: Maybe<Array<Distrito>>;
  GetAllEfectivoMovil: GetAllEfectivoMovil;
  GetAllImagenes?: Maybe<Array<Imagenes>>;
  GetAllNotificacionPedidos: GetAllNotificacionPedidos;
  GetAllPedidoUser: GetAllPedidos;
  GetAllPedidos: GetAllPedidos;
  GetAllProductos: GetAllProductos;
  GetAllProductosCategoriaSlug: GetAllProductos;
  GetAllProductosDestacados: GetAllProductos;
  GetAllProductosRelacionados: GetAllProductos;
  GetAllProvincias?: Maybe<Array<Provincia>>;
  GetAllSliders: GetAllSliders;
  GetAllTarjetaUsuario?: Maybe<Array<TarjetasUsuarios>>;
  GetAllVendedoras: GetAllVendedoras;
  GetBancoId: Banco;
  GetBlogSlug: Blog;
  GetBusquedaAvanzada: GetAllProductos;
  GetCategoriaBlogSlug: CategoriaBlog;
  GetCategoriaProductoSlug: CategoriaProducto;
  GetDatosAdicionalesPedido: GetDatosAdicionalesPedido;
  GetDatosEmpresa: DatosEmpresa;
  GetDetallePedidos?: Maybe<Array<DetallePedido>>;
  GetDireccionUsuarioId: DireccionUsuario;
  GetEfectivoMovilId: EfectivoMovil;
  GetFiltrosPalabraClave: Filtros;
  GetPedidoId: Pedido;
  GetPrecios?: Maybe<Array<Maybe<Scalars['Float']>>>;
  GetProductoSlug: Producto;
  GetReniec: Reniec;
  GetSliderId: Slider;
  GetVendedoraId: Vendedora;
};


export type QueryEmitirTicketArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBancosArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBlogsCategoriaSlugArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsDestacadosArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllCategoriaBlogsArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllCategoriaProductosArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllDireccionUsuariosArgs = {
  usuarioId: Scalars['Int'];
};


export type QueryGetAllDistritosArgs = {
  ProCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEfectivoMovilArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllImagenesArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllNotificacionPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidoUserArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosCategoriaSlugArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosDestacadosArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosRelacionadosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProvinciasArgs = {
  DepCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSlidersArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllTarjetaUsuarioArgs = {
  customer_id?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllVendedorasArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetBancoIdArgs = {
  bancoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetBusquedaAvanzadaArgs = {
  categoriaSlug?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Array<Scalars['Float']>>;
  tipoOrdenacion?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetDatosAdicionalesPedidoArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDetallePedidosArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDireccionUsuarioIdArgs = {
  direccionesUsuariosId: Scalars['Int'];
};


export type QueryGetEfectivoMovilIdArgs = {
  efectivoMovilId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFiltrosPalabraClaveArgs = {
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetReniecArgs = {
  dni?: InputMaybe<Scalars['String']>;
};


export type QueryGetSliderIdArgs = {
  sliderId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetVendedoraIdArgs = {
  vendedoraId?: InputMaybe<Scalars['Int']>;
};

export type Recibo = {
  __typename?: 'Recibo';
  pedidoId?: Maybe<Scalars['Int']>;
  razonSocial?: Maybe<Scalars['String']>;
  reciboId?: Maybe<Scalars['ID']>;
  ruc?: Maybe<Scalars['String']>;
};

export type ReciboInput = {
  pedidoId?: InputMaybe<Scalars['Int']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  reciboId?: InputMaybe<Scalars['ID']>;
  ruc?: InputMaybe<Scalars['String']>;
};

export type Slider = {
  __typename?: 'Slider';
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  link?: Maybe<Scalars['String']>;
  sliderId?: Maybe<Scalars['ID']>;
  tipoLink?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SliderInput = {
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  sliderId?: InputMaybe<Scalars['ID']>;
  tipoLink?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
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
  customer_id?: Maybe<Scalars['String']>;
  expiration_month?: Maybe<Scalars['Int']>;
  expiration_year?: Maybe<Scalars['Int']>;
  first_six_digits?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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

export type UpdateDestacadoProductoInput = {
  destacado?: InputMaybe<Scalars['String']>;
  productoId?: InputMaybe<Scalars['ID']>;
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

export type UpdateEstadoEfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoPedidoInput = {
  estado?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoProductoInput = {
  estado?: InputMaybe<Scalars['String']>;
  productoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoSliderInput = {
  estado?: InputMaybe<Scalars['String']>;
  sliderId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoVendedoraInput = {
  estado?: InputMaybe<Scalars['String']>;
  vendedoraId?: InputMaybe<Scalars['ID']>;
};

export type UpdatePasswordInput = {
  id?: InputMaybe<Scalars['ID']>;
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type UpdateVistoNotificacionPedidoInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  notificacionPedidoId?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};

export type UpdateVistoPedidoInput = {
  pedidoId?: InputMaybe<Scalars['ID']>;
  visto?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['DateTime']>;
  foto?: Maybe<Scalars['String']>;
  genero?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fechaNacimiento?: InputMaybe<Scalars['Date']>;
  foto?: InputMaybe<Scalars['String']>;
  genero?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
  tipoUsuario?: InputMaybe<Scalars['Int']>;
};

export type Vendedora = {
  __typename?: 'Vendedora';
  apellidos?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imagenPrincipal?: Maybe<Imagenes>;
  link?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type VendedoraInput = {
  apellido?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
};

export type Reniec = {
  __typename?: 'reniec';
  ApellidoMaterno?: Maybe<Scalars['String']>;
  ApellidoPaterno?: Maybe<Scalars['String']>;
  DNI?: Maybe<Scalars['String']>;
  FechaNacimiento?: Maybe<Scalars['String']>;
  Nombres?: Maybe<Scalars['String']>;
};

export type GetAllBlogsQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBlogsQuery = { __typename?: 'Query', GetAllBlogs: { __typename?: 'GetAllBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', titulo?: string | null } | null }> | null } };


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
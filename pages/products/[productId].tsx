import { cartAction } from '@/actions/cartAction';
import { productApiServer } from '@/api-server';
import { Seo } from '@/components/common/seo';
import { MainLayout } from '@/components/layout';
import { ProductListImage } from '@/components/products';
import { ProductType } from '@/models';
import { CONFIG, formatPrice } from '@/utils';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface ProductDetailProps {
  product: ProductType;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [viewMore, setViewMore] = useState(false);
  const [amount, setAmount] = useState(1);
  const [mainSrc, setMainSrc] = useState<string>(
    product?.images ? product.images[0] : CONFIG.DEFAULT_IMAGE
  );

  const router = useRouter();

  const handleDecreaseAmount = () => {
    setAmount((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const handleIncreaseAmount = () => {
    setAmount((prev) => (prev === product.quantity ? prev : prev + 1));
  };

  const handleClickBuy = () => {
    cartAction.updateCarts({ ...product, amount });
    router.push('/cart');
  };

  useEffect(() => {
    setMainSrc(product?.images ? product.images[0] : CONFIG.DEFAULT_IMAGE);
  }, [product]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Seo
        data={{
          title: product.title,
          description: product.description,
          url: `${process.env.HOST_URL}/products/${product.id}`,
          thumbnailUrl: product.images
            ? product.images[0]
            : 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />
      <Paper elevation={0} sx={{ px: 2, py: 4 }}>
        <Grid
          container
          spacing={{
            md: 2,
            sm: 0,
            xs: 0,
          }}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto',
              width: {
                sm: 'auto',
                xs: '100%',
              },
            }}
          >
            <Box
              sx={{
                width: {
                  sm: '400px',
                  xs: '100%',
                },
              }}
            >
              <Box sx={{ pt: '100%', position: 'relative', width: '100%', cursor: 'pointer' }}>
                <Image src={mainSrc} alt={product.title} fill={true} />
              </Box>
              <ProductListImage
                mainSrc={mainSrc}
                setMainSrc={setMainSrc}
                srcList={product.images || []}
              />
            </Box>
          </Grid>
          <Grid
            item
            flexGrow={1}
            mt={{
              xs: 4,
              sm: 4,
              md: 0,
            }}
          >
            <Box sx={{ height: '100%' }}>
              <Box
                sx={{
                  height: '100%',
                  pl: 2,
                  borderLeft: {
                    xs: 'none',
                    sm: 'none',
                    md: '1px solid #f2f2f2',
                  },
                }}
              >
                <Typography component="h6" variant="body2" display="flex" alignItems="center">
                  Tác giả:
                  <Typography color="secondary" ml={1}>
                    Deepak Chopra
                  </Typography>
                </Typography>
                <Typography component="p" variant="h5" color="#242424" mb={0.5}>
                  {product.title}
                </Typography>
                <Typography component="h6" variant="body1" color="darkgrey" mb={2}>
                  Đã bán: {product.quantity_sold}
                </Typography>
                <Box
                  sx={{
                    background: '#fafafa',
                    p: 3,
                  }}
                >
                  <Typography component="h6" variant="h4" color="primary">
                    {formatPrice(product.price)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: '1px solid #f2f2f2',
                    borderRadius: '8px',
                    p: 1.5,
                    mt: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '32px',
                        height: '14px',
                        cursor: 'pointer',
                      }}
                    >
                      <Image
                        src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"
                        alt="fast"
                        fill={true}
                      />
                    </Box>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        mx: 1,
                        my: 'auto',
                        height: '10px',
                      }}
                    />
                    <Typography component="h6" variant="body2" color="#00ab56" fontWeight="500">
                      Thứ 4, ngày 18/01
                    </Typography>
                  </Box>
                  <Typography component="h6" variant="body2" mt={0.5}>
                    Vận chuyển: 35.000đ
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        background: '#f2f0fe',
                        display: 'flex',
                        alignItems: 'center',
                        p: 0.5,
                        borderRadius: '4px',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '13px',
                          height: '16px',
                          cursor: 'pointer',
                        }}
                      >
                        <Image
                          src="https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png"
                          alt="deliver"
                          fill={true}
                        />
                      </Box>
                      <Typography component="h6" variant="caption" color="#402da1" ml={0.5}>
                        Freeship 100% với đơn từ 200.000đ
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 2, borderColor: '#f2f2f2' }} />

                <Box>
                  <Typography component="h6" variant="subtitle1" mb={1}>
                    Số lượng
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '4px',
                        border: '1px solid #f2f2f2',
                        maxWidth: '100px',
                        height: '30px',
                        marginRight: '20px',
                        width: '-webkit-fill-available',
                      }}
                    >
                      <Box
                        onClick={handleDecreaseAmount}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRight: '1px solid #f2f2f2',
                          width: '30px',
                        }}
                      >
                        <Remove
                          fontSize="small"
                          color={amount === 1 ? 'disabled' : 'inherit'}
                          style={{
                            cursor: amount === 1 ? 'default' : 'pointer',
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flex: '1',
                        }}
                      >
                        {amount}
                      </Box>
                      <Box
                        onClick={handleIncreaseAmount}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderLeft: '1px solid #f2f2f2',
                          width: '30px',
                        }}
                      >
                        <Add
                          fontSize="small"
                          color={amount === product.quantity ? 'disabled' : 'inherit'}
                          style={{
                            cursor: amount === product.quantity ? 'default' : 'pointer',
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography>{product.quantity} sản phẩm có sẵn</Typography>
                  </Box>
                </Box>
                <Box mt={2} width="200px" height="50px">
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ textTransform: 'none' }}
                    onClick={handleClickBuy}
                  >
                    Chọn Mua
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box my={2}>
        <Paper elevation={0} sx={{ p: 2 }}>
          <Box
            sx={{
              position: 'relative',
              maxHeight: viewMore ? 'auto' : '500px',
              overflow: viewMore ? 'auto' : 'hidden',
            }}
          >
            <Typography variant="h5">Mô tả sản phẩm</Typography>
            <Box
              mt={1}
              component="div"
              dangerouslySetInnerHTML={{
                __html:
                  '<h1 class="product-title entry-title">Gi&uacute;p chồng th&agrave;nh c&ocirc;ng</h1>\n<p>Trong cuốn s&aacute;ch&nbsp;&ldquo;Gi&uacute;p chồng th&agrave;nh c&ocirc;ng&rdquo;,&nbsp;t&aacute;c giả chỉ x&eacute;t ri&ecirc;ng những phương tiện c&oacute; thể gi&uacute;p người phụ nữ vừa l&agrave;m tr&ograve;n nhiệm vụ nội trợ lại vừa t&igrave;m ra c&aacute;ch gi&uacute;p chồng leo l&ecirc;n những nấc thang th&agrave;nh c&ocirc;ng.</p>\n<div id="row-684690461" class="row row-small">&nbsp;\n<p><span>Đằng sau một người đ&agrave;n &ocirc;ng th&agrave;nh c&ocirc;ng l&agrave; b&oacute;ng d&aacute;ng của một người phụ nữ chu to&agrave;n. Người phụ nữ n&agrave;o cũng mong muốn được chồng y&ecirc;u thương v&agrave; muốn chồng m&igrave;nh c&oacute; thể th&agrave;nh c&ocirc;ng trong sự nghiệp, c&oacute; chỗ đứng trong x&atilde; hội v&agrave; l&agrave;m ra được nhiều tiền của để cuộc sống dư giả v&agrave; sung t&uacute;c.</span>&nbsp;<span>Để th&agrave;nh c&ocirc;ng ngo&agrave;i nỗ lực kh&ocirc;ng ngừng nghỉ của người chồng, người vợ đ&oacute;ng vai tr&ograve; kh&ocirc;ng k&eacute;m phần quan trọng trong th&agrave;nh c&ocirc;ng đ&oacute;. Người phụ nữ lu&ocirc;n l&agrave; hậu phương vững chắc, lu&ocirc;n &acirc;m thầm đứng sau c&aacute;nh g&agrave; chuẩn bị mọi thứ tốt nhất về sức khỏe, tinh thần, t&agrave;i ch&iacute;nh đ&ocirc;i khi cả c&ocirc;ng việc nữa. Nhưng kh&ocirc;ng phải người phụ nữ n&agrave;o cũng l&agrave;m tốt được điều đ&oacute; bởi v&igrave;:</span></p>\n<ul>\n<li><span>Rất nhiều phụ nữ hiện nay kh&ocirc;ng biết n&ecirc;n gi&uacute;p đỡ chồng m&igrave;nh những g&igrave; để chồng c&oacute; thể th&agrave;nh c&ocirc;ng như mong muốn?</span></li>\n<li><span>Phụ nữ hiện đại c&oacute; qu&aacute; nhiều thứ bận rộn v&agrave; cần phải để t&acirc;m do đ&oacute; nhiều b&agrave; vợ kh&ocirc;ng biết c&acirc;n bằng như thế n&agrave;o giữa việc nội trợ, c&ocirc;ng việc của bản th&acirc;n v&agrave; việc hỗ trợ chồng.</span></li>\n<li><span>Nếu gi&uacute;p đỡ, người phụ nữ n&ecirc;n gi&uacute;p đỡ bao nhi&ecirc;u l&agrave; đủ để người chồng kh&ocirc;ng cảm thấy qu&aacute; nặng nề hay &aacute;p lực để chồng sợ mang tiếng &ldquo;dựa hơi&rdquo; vợ đi l&ecirc;n?</span></li>\n<li><span>Hạnh ph&uacute;c h&ocirc;n nh&acirc;n l&agrave; phải do cả hai c&ugrave;ng x&acirc;y đắp, vậy c&aacute;c b&agrave; vợ cần cư xử như thế n&agrave;o để hạnh ph&uacute;c ấy được bền l&acirc;u?</span></li>\n</ul>\n<p><span>Trong cuốn s&aacute;ch&nbsp;</span><span>&ldquo;Gi&uacute;p chồng th&agrave;nh c&ocirc;ng&rdquo;,</span><span>&nbsp;t&aacute;c giả chỉ x&eacute;t ri&ecirc;ng những phương tiện c&oacute; thể gi&uacute;p người phụ nữ vừa l&agrave;m tr&ograve;n nhiệm vụ nội trợ lại vừa t&igrave;m ra c&aacute;ch gi&uacute;p chồng leo l&ecirc;n những nấc thang th&agrave;nh c&ocirc;ng.</span>&nbsp;<span>Đầu ti&ecirc;n t&aacute;c giả Dorothy Carnegie đi định nghĩa th&agrave;nh c&ocirc;ng l&agrave; g&igrave;? Điều n&agrave;y rất quan trọng bởi bạn kh&ocirc;ng thể c&oacute; được thứ m&agrave; bản th&acirc;n m&igrave;nh kh&ocirc;ng định nghĩa được. Theo &yacute; tối, b&agrave; cho rằng một người l&agrave;m một c&ocirc;ng việc vui th&iacute;ch v&agrave; c&oacute; cảm tưởng l&agrave; sống một đời sống đầy đủ, l&agrave; người ấy đ&atilde; th&agrave;nh c&ocirc;ng. B&ecirc;n cạnh đ&oacute;, kh&ocirc;ng kh&iacute; gia đ&igrave;nh cũng lu&ocirc;n phải vui tươi hạnh ph&uacute;c, vợ chồng h&ograve;a thuận.&nbsp;</span></p>\n<ul>\n<li>\n<h3><span>PHẦN &nbsp;THỨ NHẤT: NHỮNG BƯỚC ĐẦU TỚI TH&Agrave;NH C&Ocirc;NG</span></h3>\n</li>\n</ul>\n<p><span>Phần thứ nhất sẽ hỗ trợ c&aacute;c b&agrave; vợ gi&uacute;p chồng x&aacute;c định r&otilde; mục đ&iacute;ch sống của bản th&acirc;n. Khi đ&atilde; c&oacute; mục đ&iacute;ch rồi, c&aacute;c b&agrave; vợ sẽ động vi&ecirc;n để chồng m&igrave;nh c&oacute; quyết t&acirc;m đạt được mục đ&iacute;ch đ&oacute;. Sau khi ho&agrave;n th&agrave;nh xong mục đ&iacute;ch đ&oacute;, c&aacute;c b&agrave; vợ sẽ gi&uacute;p chồng m&igrave;nh kiếm th&ecirc;m nhiều mục đ&iacute;ch kh&aacute;c.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ HAI: NHỮNG QUY TẮC CĂN BẢN</span></h3>\n</li>\n</ul>\n<p><span>Phần thứ 2 tập trung v&agrave;o 3 kh&iacute;a cạnh ch&iacute;nh bao gồm: c&aacute;ch lắng nghe c&oacute; &iacute;ch; Lu&ocirc;n lu&ocirc;n khuyến kh&iacute;ch khen chồng để gi&uacute;p chồng c&oacute; thể trở th&agrave;nh người m&agrave; chồng bạn ước muốn trở th&agrave;nh.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ BA: BỐN C&Aacute;CH ĐỂ GI&Uacute;P CHỒNG</span></h3>\n</li>\n</ul>\n<p><span>Phần 3 sẽ chỉ cho c&aacute;c b&agrave; vợ biết được 4 c&aacute;ch đơn giản m&agrave; hiệu quả để c&oacute; thể gi&uacute;p chồng m&igrave;nh. Để hiểu hơn 4 quy tắc n&agrave;y c&aacute;c bạn h&atilde;y đ&oacute;n đọc ở phần 3 của cuốn s&aacute;ch.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ TƯ: L&Agrave;M SAO TH&Iacute;CH NGHI VỚI MỘT T&Igrave;NH THẾ MỚI</span></h3>\n</li>\n</ul>\n<p><span>Cuộc sống lu&ocirc;n đổi thay v&igrave; thế những t&igrave;nh thế mới l&agrave; kh&ocirc;ng thể tr&aacute;nh khỏi. T&igrave;nh thế thay đổi, phong độ hay t&igrave;nh cảm của con người cũng dễ d&agrave;ng thay đổi theo. Phần 4 cuốn s&aacute;ch mục đ&iacute;ch muốn c&aacute;c bạn biết điều đ&oacute; v&agrave; thực h&agrave;nh ngay v&agrave;o gia đ&igrave;nh m&igrave;nh.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ NĂM: MUỐN CHỒNG TH&Agrave;NH C&Ocirc;NG N&Ecirc;N TR&Aacute;NH NHỮNG CẠM BẪY N&Agrave;Y</span></h3>\n</li>\n</ul>\n<p><span>Đừng lo lắng nếu c&oacute; nhiều cạm bẫy đang bủa v&acirc;y tới vợ chồng bạn bởi phần thứ 5 ch&iacute;nh l&agrave; những b&iacute; mật gi&uacute;p vợ chồng bạn l&aacute;ch khỏi những cạm bẫy nguy hiểm.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ S&Aacute;U: G&Acirc;Y HẠNH PH&Uacute;C CHO CHỒNG</span></h3>\n</li>\n</ul>\n<p><span>Khiến chồng c&oacute; cảm gi&aacute;c hạnh ph&uacute;c ch&iacute;nh l&agrave; một trong những b&iacute; quyết gi&uacute;p h&ocirc;n nh&acirc;n của bạn bền vững. Phần s&aacute;u sẽ chỉ cho c&aacute;c b&agrave; vợ 4 c&aacute;ch để c&oacute; thể mang tới cảm gi&aacute;c hạnh ph&uacute;c cho người bạn đời của m&igrave;nh.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ BẢY: L&Agrave;M CHO GIA Đ&Igrave;NH ĐẦM ẤM, VUI VẺ</span></h3>\n</li>\n</ul>\n<p><span>Phần b&agrave;y chia th&agrave;nh 4 chương nhỏ sẽ chỉ cho c&aacute;c b&agrave; nội trợ những yếu tố dễ d&agrave;ng x&acirc;y dựng được một tổ ấm hạnh ph&uacute;c v&agrave; vui vẻ.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ T&Aacute;M: L&Agrave;M CHO CHỒNG ĐƯỢC NHIỀU NGƯỜI MẾN</span></h3>\n</li>\n</ul>\n<p><span>Người chồng được nhiều người y&ecirc;u mến th&igrave; tất người vợ cũng được thơm l&acirc;y. V&agrave; nếu người vợ muốn hưởng phần &ldquo;thơm&rdquo; đ&oacute; th&igrave; c&aacute;c bạn n&ecirc;n nghi&ecirc;n cứu cẩn thận phần 8 cuốn s&aacute;ch n&agrave;y.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ CH&Iacute;N: GIỮ G&Igrave;N SỨC KHỎE V&Agrave; TINH THẦN CHO CHỒNG</span></h3>\n</li>\n</ul>\n<p><span>Sức khỏe l&agrave; t&agrave;i sản qu&yacute; gi&aacute; nhất của mỗi con người, muốn chồng khỏe mạnh những người vợ đ&oacute;ng vai tr&ograve; rất quan trọng. Phần 9 chia th&agrave;nh 2 &yacute; nhỏ sẽ gi&uacute;p phụ nữ c&oacute; thể tạo được th&oacute;i quen sống với số tiền chồng kiếm được v&agrave; c&aacute;ch săn s&oacute;c sức khỏe của chồng như săn s&oacute;c sức khỏe của ch&iacute;nh bản th&acirc;n m&igrave;nh.</span></p>\n<ul>\n<li>\n<h3><span>PHẦN THỨ MƯỜI: ĐIỀU QUAN TRỌNG NHẤT</span></h3>\n</li>\n</ul>\n<p><span>B&iacute; mật quan trọng nhất d&agrave;nh cho c&aacute;c b&agrave; vợ sẽ được một b&agrave; vợ gi&agrave;u kinh nghiệm trong việc gi&uacute;p chồng th&agrave;nh c&ocirc;ng &ndash; ch&iacute;nh l&agrave; t&aacute;c giả Dorothy Carnegie bật m&iacute; trong chương cuối c&ugrave;ng của cuốn s&aacute;ch n&agrave;y.</span>&nbsp;<span>Khi lập gia đ&igrave;nh, người phụ nữ n&agrave;o cũng đều muốn c&oacute; được hạnh ph&uacute;c trong h&ocirc;n nh&acirc;n v&agrave; cầu cho người chồng được th&agrave;nh c&ocirc;ng như &yacute; m&igrave;nh mong muốn. Nếu muốn vậy, c&aacute;c b&agrave; vợ h&atilde;y t&igrave;m v&agrave; đọc ngay cuốn s&aacute;ch &ldquo;Gi&uacute;p chồng th&agrave;nh c&ocirc;ng&rdquo; của t&aacute;c giả Dorothy Carnegie do dịch giả Nguyễn Hiến L&ecirc; dịch sang tiếng Việt nh&eacute;!</span></p>\n<p><span>&nbsp;</span></p>\n</div><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>',
              }}
            ></Box>
            {!viewMore && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '0px',
                  left: '0px',
                  width: '100%',
                  height: '200px',
                  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))',
                }}
              ></Box>
            )}
          </Box>
          <Box textAlign="center" mt={1}>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none' }}
              onClick={() => setViewMore(!viewMore)}
            >
              {viewMore ? 'Thu gọn nội dung' : 'Xem thêm nội dung'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

ProductDetail.Layout = MainLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await productApiServer.getAll();
  const products = data.data;

  return {
    paths: products.map((product) => ({ params: { productId: product.id?.toString() } })),

    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductDetailProps> = async (
  context: GetStaticPropsContext
) => {
  try {
    const slug = context.params?.productId;
    if (!slug) return { notFound: true };

    const data = await productApiServer.getDetail(slug as string);

    if (!data || !data.data) return { notFound: true };

    return {
      props: {
        product: data.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

import { Box, Typography } from '@mui/joy';

const data = [
  {
    src: 'https://images-static.nykaa.com/uploads/8f13793a-0156-49af-b20c-2323ec6cde3f.jpg?tr=w-120,cm-pad_resize',
    title: 'Women',
    id: 6557
  },
  {
    src: 'https://images-static.nykaa.com/uploads/c1f68994-bc6d-4fb0-9cac-d0ce47d67838.jpg?tr=w-120,cm-pad_resize',
    title: 'Men',
    id: 6823
  },
  {
    src: 'https://images-static.nykaa.com/uploads/49e6ae70-6e96-44d6-8d56-a5359731b8ec.jpg?tr=w-120,cm-pad_resize',
    title: 'Kids',
    id: 6266
  },
  {
    src: 'https://images-static.nykaa.com/uploads/a66486e0-8eb4-4ef1-a6be-4a135f16432a.jpg?tr=w-120,cm-pad_resize',
    title: 'Home',
    id: 8528
  },
  {
    src: 'https://images-static.nykaa.com/uploads/585628e7-8d3a-45b1-aedc-195daff883ff.jpg?tr=w-120,cm-pad_resize',
    title: 'Luxs Edit',
    id: 57205
  },
  {
    src: 'https://images-static.nykaa.com/uploads/d92a7ba6-ed6b-4d4e-a3ed-2524525ee042.jpg?tr=w-120,cm-pad_resize',
    title: 'Hidden Gems',
    id: 7266
  },
  {
    src: 'https://images-static.nykaa.com/uploads/3918fadc-f7d4-4c90-b698-05a083736705.jpg?tr=w-120,cm-pad_resize',
    title: 'Global Store',
    id: 6557
  },
  {
    src: 'https://images-static.nykaa.com/uploads/d2145972-3bfb-4f68-aff1-2b6bb376b59b.jpg?tr=w-120,cm-pad_resize',
    title: 'Revolve',
    id: 14334
  },
  {
    src: 'https://images-static.nykaa.com/uploads/f6a1b761-90bb-483c-ae5d-e17184459fd2.jpg?tr=w-120,cm-pad_resize',
    title: 'House of Nykaa',
    id: 13388
  }
];

export default function HorizonatalCarousel({ handleImageClick }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: { md: 2, xs: 0.5 },
        py: 2,
        overflowX: 'auto',
        px: { md: 4, xs: 1 },
        marginLeft: { md: 6, xs: 1 },
        marginRight: { md: 6, xs: 1 },
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'start',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          onClick={() =>
            handleImageClick(item.id, `/rendring?categoryId=${item.id}`)
          }
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            minWidth: { md: 145, xs: 77 },
            touchAction: 'manipulation', // ✅ mobile tap delay fix
            WebkitTapHighlightColor: 'transparent', // ✅ removes grey tap overlay in mobile
          }}
        >
          <Box
            component="img"
            src={item.src}
            alt={item.title}
            sx={{
              width: { md: 120, xs: 70 },
              height: { md: 120, xs: 70 },
              borderRadius: '50%',
              objectFit: 'cover',
              pointerEvents: 'auto', // ✅ ensures image can receive touch events
              userSelect: 'none', // ✅ prevents accidental text/image selection
              transition: 'transform 0.3s ease',
              '&:active': { transform: 'scale(0.95)' } // ✅ click feedback
            }}
          />
          <Typography
            level="body-sm"
            sx={{
              mt: 1,
              textAlign: 'center',
              fontSize: { xs: '0.75rem', md: '0.875rem' }
            }}
          >
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

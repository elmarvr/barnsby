import { createIcon, Box } from "@chakra-ui/react";

const Icon = ({ icon, size, height, width, ...props }) => {
  if (icon) {
    const CustomIcon = createIcon({
      displayName: `CustomIcon`,
      viewBox: `0 0 ${icon.width} ${icon.height}`,
      path: <g dangerouslySetInnerHTML={{ __html: icon.body }} />,
    });

    const iconHeight = size || height;
    const iconWidth = size || width;

    return (
      <Box
        as="span"
        display="inline-block"
        {...props}
        height={iconHeight}
        width={iconWidth}
      >
        <CustomIcon height={iconHeight} width={iconWidth} />
      </Box>
    );
  }

  return <Box as="span" {...props} />;
};

export default Icon;

<?php
$data = [
    'src' => 'https://calmer.tw/',
    'title' => '善寬靜の界｜巨蛋 微笑公園3-4房 即將公開',
    'description' => '善寬靜の界：正市心公園宅，日系大和美學，純質全邊間3-4房，值得期待，接待中心：高雄市左營區文教育2號，預約專線：345-2888',
    'keyword' => '善寬靜の界,高雄建案,左營建案,自由黃昏市場買房,左營買房',
    'image' => 'https://calmer.tw/og.jpg'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
$shareUrl = $data['src'];
$shareImg = $data['image'];
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">

<!-- Open Graph -->
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta property="og:url" content="<?php echo $shareUrl; ?>" />
<meta property="og:image" content="<?php echo $shareImg; ?>" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:image" content="<?php echo $shareImg; ?>" />

<!-- Schema.org -->
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">
<meta itemprop="image" content="<?php echo $shareImg; ?>">
